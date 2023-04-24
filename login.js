const { chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless: false, slowMo: 1000});
    const page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/')
    const username = await page.$('#user-name');
    await username.type('standard_user', { delay: 50});
    const password = await page.$('#password');
    await password.type('secret_sauce', { delay: 50});
    const loginButton = await page.$('#login-button');
    await loginButton.click();
    const shoppingCart = await page.$('#shopping_cart_container');
    await browser.close();
})();