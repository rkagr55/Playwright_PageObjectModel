import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.js'

test('test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.login('tomsmith', 'SuperSecretPassword!');

    await context.close();
});