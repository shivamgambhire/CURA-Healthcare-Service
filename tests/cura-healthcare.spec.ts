import {test, expect} from '@playwright/test';
import { loginAppointment } from '../page-objects/loginAppointment';

test("Login with make appointment ", async({page}) => {

    let login = new loginAppointment(page);

    await login.loginPage();

    //await page.waitForLoadState('networkidle')

    await expect(page.locator("h2")).toHaveText("Make Appointment")  //assertion validation

    await login.appointmentPage();

    await expect(page.locator("h2")).toHaveText("Appointment Confirmation")  //assertion validation

    await console.log("Facility: "+await page.locator("#facility").textContent())
    await console.log("Hospital Readmission: "+await page.locator("#hospital_readmission").textContent())
    await console.log("Program: "+await page.locator("#program").textContent())
    await console.log("Visit Date: "+await page.locator("#visit_date").textContent())
    await console.log("Comment: "+await page.locator("#comment").textContent())
})
