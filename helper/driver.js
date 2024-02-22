const { By, until, error, Key } = require("selenium-webdriver");
const { Actions } = require('selenium-webdriver/lib/input');
const assert = require("assert");
const { sleep } = require("../helper/utils");

class Browser {
  
  constructor(){
    if (global.driver){
      throw new Error(
        "Browser instance not created. Call startBrowser() first."
      );
    }
  }

  async navigate(url) {
    await driver.get(url);
  }

}

module.exports = { Browser }