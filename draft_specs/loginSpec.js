import loginPage from '../pages/loginPage';
import userData from '../data/userData';

describe ('SCL Portal login', () => {
    beforeEach(() => {
        loginPage.goto();
    });

    it('should display message for invalid credentials', () => {
        loginPage.login('invalid_user', 'invalid_password');

        expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should display message for empty credentials', () => {
        loginPage.login('', '');

        expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should goto sclhome pages on successful login', () => {
        loginPage.loginAs(userData.testUser);

        expect(SclHomePage.loaded()).toBe(true);
    });
});