exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page; // creating class variable page for this perticular class and its value will be made equal to value whatever coming in this constructor
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
}

