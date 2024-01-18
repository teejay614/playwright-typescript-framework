import {test, expect} from '@playwright/test'

// Playwright API documentation 
// https://playwright.dev/docs/api-testing
const baseUrl = 'https://jsonplaceholder.typicode.com'

test('should do something', async({request})=>{
    const response = await request.fetch(`${baseUrl}/todos/1`);
    const responseBody = await response.json();
    expect(responseBody.title).toBe('delectus aut autem');
 
})