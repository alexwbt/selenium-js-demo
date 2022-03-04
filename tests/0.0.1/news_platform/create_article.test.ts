import LoginPage from "../../../selenium/pages/news-platform/LoginPage";
import { useDriver } from "../../../utils/driver";

describe('0.0.1/news_platform_demo/create_article.test', () => {
    const getDriver = useDriver();

    it('Go to create article page', async () => {

        await getDriver().get("https://news-platform.easyview.xyz");

        const loginPage = new LoginPage(getDriver());
        await loginPage.login(
            process.env.NEWS_PLATFORM_USERNAME || '',
            process.env.NEWS_PLATFORM_PASSWORD || ''
        );

        const currentUrl = await getDriver().getCurrentUrl();
        expect(currentUrl).toBe('https://news-platform.easyview.xyz/');

        await getDriver().sleep(2000);
        expect(1).toBe(1);
    }, 10000);

});
