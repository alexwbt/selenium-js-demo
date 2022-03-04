import { By, Key, until } from "selenium-webdriver";
import Locator from "../Locator";
import Page from "../Page";

export default class CreateQuotationPage extends Page {

    private custodianInput = new Locator(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div/div[1]/input'));
    private firstCustodian = new Locator(By.xpath('/html/body/div[4]/div[1]/div[1]/ul/li'))

    private underlyingInput = new Locator(By.xpath('//*[@id="pane-FCN"]/div/div[1]/div/div[3]/table/tbody/tr/td[4]/div/div/div/div/div[1]/input'));
    private firstUnderlying = new Locator(By.xpath(`/html/body/div[6]/div[1]/div[1]/ul/li[1]`));

    private submitButton = new Locator(By.xpath(`//*[@id="pane-FCN"]/div/div[2]/span`));

    async selectCustodian(custodian: string) {
        const input = await this.custodianInput.getElement(this.driver);
        if (!input) return;
        await input.sendKeys(custodian);
        
        const item = await this.firstCustodian.getElement(this.driver);
        if (!item) return;
        await this.driver.actions().click(item);
    }

    async selectUnderlying(underlying: string) {
        const input = await this.underlyingInput.getElement(this.driver);
        if (!input) return;
        await input.sendKeys(underlying);
        
        const item = await this.firstUnderlying.getElement(this.driver);
        if (!item) return;
        await this.driver.actions().click(item);
    }

    async submit() {
        const input = await this.submitButton.getElement(this.driver);
        if (!input) return;
        await input.click();
    }

}
