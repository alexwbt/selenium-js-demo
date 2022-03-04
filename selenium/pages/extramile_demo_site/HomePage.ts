import { By } from "selenium-webdriver";
import Locator from "../Locator";
import Page from "../Page";

export default class HomePage extends Page {

    private newQuotesButton = new Locator(By.xpath("/html/body/div[1]/div/div/div[1]/div[3]/div[5]"));

    async clickNewQuotesButton() {
        const button = await this.newQuotesButton.getElement(this.driver);
        if (!button)
            return;

        await button.click();
    }

}
