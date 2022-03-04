import { Builder, WebDriver } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

export const useDriver = () => {
    let driver: WebDriver | undefined;

    jest.setTimeout(200000);

    beforeAll(async () => {
        try {
            const options = new chrome.Options();
            options.addArguments("test-type");
            options.addArguments("start-maximized");
            options.addArguments("incognito");
            const service = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

            driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(options)
                .setChromeService(service)
                .build();
        } catch (error) {
            console.error("Failed to init driver.", error);
        }
    });

    afterAll(async () => {
        try {
            await driver?.quit();
        } catch (error) {
            console.error("Failed to quit driver.", error);
        }
    });

    return (): WebDriver => {
        if (!driver)
            throw new Error("Driver not initialized.");
        return driver;
    };
};
