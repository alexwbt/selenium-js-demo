import { By } from "selenium-webdriver";
import Locator from "../Locator";
import Page from "../Page";

export default class IndexPage extends Page {

    private createArticleButtonLocator = new Locator(By.xpath('/html/body/div/div/div/div/div/main/div/div/section/div[1]/div/a'));

    async clickCreateArticleButton() {
        const button = await this.createArticleButtonLocator.getElement(this.driver);
        if (!button)
            return;

        this.driver.executeScript((button_: HTMLButtonElement) => {
            button_.click();
        }, button);
    }

}
