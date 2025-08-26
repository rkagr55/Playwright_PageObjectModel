import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.js'

test('test', async ({ context }) => {

    const page = await context.newPage();
    const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.login('tomsmith', 'SuperSecretPassword!');

    await page.close();
});