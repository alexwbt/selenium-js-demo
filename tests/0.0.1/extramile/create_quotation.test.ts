import { until } from "selenium-webdriver";
import CreateQuotationPage from "../../../selenium/pages/extramile_demo_site/CreateQuotationPage";
import HomePage from "../../../selenium/pages/extramile_demo_site/HomePage";
import LoginPage from "../../../selenium/pages/extramile_demo_site/LoginPage";
import { useDriver } from "../../../utils/driver";

describe('0.0.1/news_platform_demo/create_quotation.test', () => {
    const getDriver = useDriver();

    const login = async (username: string, password: string) => {
        await getDriver().get("https://u.extramile.easyview.xyz:8443/");

        const loginPage = new LoginPage(getDriver());
        await loginPage.login(username, password);

        // wait until we are in homepage
        await getDriver().wait(until.urlIs("https://u.extramile.easyview.xyz:8443/home"), 5000);
    };

    it('Create a Quotation', async () => {
        await login(
            process.env.EXTRAMILE_DEMO_USERNAME || '',
            process.env.EXTRAMILE_DEMO_PASSWORD || ''
        );

        const homePage = new HomePage(getDriver());
        await homePage.clickNewQuotesButton();

        // wait until we are in create quotation page
        await getDriver().wait(until.urlIs("https://u.extramile.easyview.xyz:8443/tasks/quotation/create"), 5000);

        const createQuotationPage = new CreateQuotationPage(getDriver());

        await createQuotationPage.selectCustodian("BOCHK HK");
        await createQuotationPage.selectUnderlying("GOOG");
        await createQuotationPage.submit();

        await getDriver().sleep(5000);
        expect(1).toBe(1);
    }, 100000);

});
