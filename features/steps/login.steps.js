const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();

Given('I open the saucedemo login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When('I login with {string} and {string}', async ({ page }, username, password) => {
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
});

Then('I should see the products page', async ({ page }) => {
  await page.waitForSelector('.inventory_list', { timeout: 5000 });
});

Then('I should see an error message', async ({page}) => {
  await page.waitForSelector('.error-message-container', { timeout: 5000 });    
});