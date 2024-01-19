//test automation practice site 
// https://letcode.in/test

import { test, expect } from '@playwright/test';

test('can send keys', async ({ page }) => {
    // locators
    const fullNameInput = page.locator('xpath=//input[@id="fullName"]');
    const joinInput = page.locator('xpath=//input[@id="join"]');
    const getMeInput = page.locator('xpath=//input[@id="getMe"]');
   
    
    // actions
    await page.goto('https://letcode.in/edit');
    await fullNameInput.fill('Timothy Thacker');
    // Get the current value of the input field
    const currentInputValue = await joinInput.inputValue();
    await joinInput.fill(`${currentInputValue} appending some text and then tabbing out!`);
    await page.keyboard.press('Tab');
    await getMeInput.getAttribute('value');
    //Expect a textbox to have a certain value
    //true
    expect(await getMeInput.getAttribute('value')).toBe('ortonikc');
    //false 
    //expect(await getMeInput.getAttribute('value')).toBe('hey!');
});