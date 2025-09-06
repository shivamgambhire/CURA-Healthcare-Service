import {test, expect} from '@playwright/test';

test("Login with make appointment ", async({page}) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/",{ waitUntil: 'domcontentloaded' })
    //await page.waitForLoadState('networkidle')

    await page.click("#btn-make-appointment")       //by id locator 

    await expect(page.locator("h2")).toHaveText("Login")   //by tag name locator

    await page.fill("#txt-username","John Doe")
    await page.fill("#txt-password","ThisIsNotAPassword")

    await page.click("#btn-login")

    await expect(page.locator("h2")).toHaveText("Make Appointment")  //assertion validation 

    //*************************/

    await page.selectOption("#combo_facility", "Seoul CURA Healthcare Center")  //dropdown selection

    await page.check("#chk_hospotal_readmission")   //check box

    await page.check("#radio_program_medicaid")     //radio button

    //await page.click('#txt_visit_date');

    await page.fill('#txt_visit_date', '30/09/2025');
    await page.keyboard.press('Enter');                     //here i use enter keyboard event

    await page.locator("#txt_comment").focus();                 // focus the text area because the date picker is blocking the text area

    await page.fill("#txt_comment", "this is appointment for checkup");  // fill the text area

    await page.click("#btn-book-appointment")   //button click

    await expect(page.locator("h2")).toHaveText("Appointment Confirmation")  //assertion validation

    await console.log("Facility: "+await page.locator("#facility").textContent())
    await console.log("Hospital Readmission: "+await page.locator("#hospital_readmission").textContent())
    await console.log("Program: "+await page.locator("#program").textContent())
    await console.log("Visit Date: "+await page.locator("#visit_date").textContent())
    await console.log("Comment: "+await page.locator("#comment").textContent())
})
