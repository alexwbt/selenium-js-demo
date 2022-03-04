import { By } from "selenium-webdriver";
import Locator from "../Locator";
import Page from "../Page";

export default class LoginPage extends Page {

    private usernameLocator = new Locator(By.id("username"));
    private passwordLocator = new Locator(By.id("password"));

    async login(username: string, password: string) {
        const [usernameInput, passwordInput] = await Promise.all([
            this.usernameLocator.getElement(this.driver),
            this.passwordLocator.getElement(this.driver)
        ]);
        if (!usernameInput || !passwordInput)
            return;

        await this.driver.executeScript((
            usernameInput_: HTMLInputElement,
            passwordInput_: HTMLInputElement,
            username_: string,
            password_: string
        ) => {
            usernameInput_.value = username_;
            passwordInput_.value = password_;
        }, usernameInput, passwordInput, username, password);
        await passwordInput.submit();
    }

}
