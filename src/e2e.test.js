const puppeteer = require('puppeteer');

test('should create an element with use inputs', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080'], 
  });

  const page = await browser.newPage();
  await page.goto('localhost:5500/src/index.html');

  await page.click('input#name');
  await page.type('input#name', 'Gloria');
  await page.click('input#age');
  await page.type('input#age', '25');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);

  expect(finalText).toBe('Gloria (25 years old)');
}, 10000);