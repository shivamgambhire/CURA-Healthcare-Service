import {expect, Locator, Page} from '@playwright/test';

export class loginAppointment {

    //define locators
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly makeAppointmentButton: Locator


    //initialize locators using constructor
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("#txt-username")
        this.password = page.locator("#txt-password")
        this.loginButton = page.locator("#btn-login")
        this.makeAppointmentButton = page.locator("#btn-make-appointment")
    }


    //define page methods
    async loginPage(){
        await this.page.goto("https://katalon-demo-cura.herokuapp.com/",{ waitUntil: 'domcontentloaded' })
        await this.makeAppointmentButton.click()

        await expect(this.page.locator("h2")).toHaveText("Login")   //by tag name locator

        await this.username.fill("John Doe")
        await this.password.fill("ThisIsNotAPassword")
        await this.loginButton.click()
    }



}