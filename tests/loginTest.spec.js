const {LoginPage} = require ('./pageObjects/loginPage');
import {test} from '@playwright/test';

test('login with valid credentials', async({page}) =>{
    const loginPage = new LoginPage(page);
    loginPage.goto();
    loginPage.loginUser(userName, password);
})