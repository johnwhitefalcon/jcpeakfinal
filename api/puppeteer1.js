const puppeteer = require('puppeteer');

export default async function handler(req, res) {
    
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://localhost:4000/page9');
    const data = await page.screenshot({ path: 'example.png' });
    
    
      
    
  }
  

