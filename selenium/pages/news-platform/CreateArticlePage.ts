import { By } from "selenium-webdriver";
import Locator from "../Locator";
import Page from "../Page";

export default class CreateArticlePage extends Page {

    private titleLocator = new Locator(By.id("form-item--title"));
    private summaryLocator = new Locator(By.id("form-item--summary"));

    async setTitle(title: string) {
        const titleElement = await this.titleLocator.getElement(this.driver);
        if (!titleElement)
            return;

        this.driver.executeScript((titleElement_: HTMLInputElement, title_: string) => {
            titleElement_.value = title_;
        }, titleElement, title)
    }

}
