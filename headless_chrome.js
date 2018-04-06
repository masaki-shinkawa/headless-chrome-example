async function scraping(url) {
  const puppeteer = require("puppeteer")

  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'], timeout: 30000 });
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ 'path': '/tmp/share/screenshot.png', 'fullPage': true });
    const planetext = await page.evaluate(() => {
      return document.title;
    })
    await browser.close();

    return planetext;
  } catch (e) {
    console.log(e)
    setTimeout(() => {
      scraping(url).then((result) => {
        return result
      })
    }, 30000);
  }
}

scraping('https://www.google.com').then((result) => {
  console.log(result)
})