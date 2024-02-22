const { BeforeAll, After, AfterAll } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');

let driver;

BeforeAll(async () => {
//   driver = await new Builder().forBrowser('chrome').build();

let options = new firefox.Options()
    .setPreference("intl.accept_languages", "en,en-US");
    global.driver = new Builder()
            .forBrowser("firefox")
            .setFirefoxOptions(options)
            .build();
});

After(async () => {
  await driver.quit();
});