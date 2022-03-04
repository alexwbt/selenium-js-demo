import { By, Key } from "selenium-webdriver";
import Locator from "../Locator";
import Page from "../Page";

export default class LoginPage extends Page {

    private usernameLocator = new Locator(By.xpath("/html/body/div/div/div/div/div[2]/div/div[1]/div[1]/div[2]/div[2]/input"));
    private passwordLocator = new Locator(By.xpath(`//*[@id="__layout"]/div/div/div[2]/div/div[1]/div[2]/div[2]/div[2]/input`));

    async login(username: string, password: string) {
        const [usernameInput, passwordInput] = await Promise.all([
            this.usernameLocator.getElement(this.driver),
            this.passwordLocator.getElement(this.driver)
        ]);
        if (!usernameInput || !passwordInput)
            return;

        await usernameInput.sendKeys(username);
        await passwordInput.sendKeys(password);
        await passwordInput.sendKeys(Key.ENTER);
    }

}
