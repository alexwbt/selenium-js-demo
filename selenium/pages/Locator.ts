import { By, until, WebDriver, WebElement } from "selenium-webdriver";

export default class Locator {

    constructor(private by: By) { }

    async getElement(driver: WebDriver, timeout: number = 1000): Promise<WebElement | null> {
        try {
            return await driver.wait(until.elementLocated(this.by), timeout);
        } catch (_) {
            return null;
        }
    }

}
