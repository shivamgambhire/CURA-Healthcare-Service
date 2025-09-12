import {expect, Locator, Page} from '@playwright/test';

export class loginAppointment {

    //define locators
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly makeAppointmentButton: Locator;
    readonly facilityDropdown: Locator;
    readonly hospitalReadmissionCheckbox: Locator;
    readonly radioButton_program_medicaid: Locator;
    readonly datePicker: Locator;
    readonly commentTextArea: Locator;
    readonly bookAppointmentButton: Locator


    //initialize locators using constructor
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("#txt-username")
        this.password = page.locator("#txt-password")
        this.loginButton = page.locator("#btn-login")
        this.makeAppointmentButton = page.locator("#btn-make-appointment")
        this.facilityDropdown = page.locator("#combo_facility")
        this.hospitalReadmissionCheckbox = page.locator("#chk_hospotal_readmission")
        this.radioButton_program_medicaid = page.locator("#radio_program_medicaid")
        this.datePicker = page.locator('#txt_visit_date')
        this.commentTextArea = page.locator("#txt_comment")
        this.bookAppointmentButton = page.locator("#btn-book-appointment")
        
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

    async appointmentPage(){
        await this.facilityDropdown.selectOption("Tokyo CURA Healthcare Center")
        await this.hospitalReadmissionCheckbox.check()
        await this.radioButton_program_medicaid.check()
        await this.datePicker.fill("2023-10-10")
        await this.datePicker.press('Enter');
        await this.commentTextArea.focus()              // focus the text area because the date picker is blocking the text area
        await this.commentTextArea.fill("Looking forward to my appointment.")
        await this.bookAppointmentButton.click()
    }



}