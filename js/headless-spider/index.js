const puppeteer = require('puppeteer');
const sleep = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, time)
});
async function getLeetCode() {
  // 默认 以无头启动
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  page.setViewport({
    width: 1376,
    height: 768
  })
  await page.goto('https://leetcode-cn.com/u/yan-bo-yi', {
    waitUntil: 'networkidle0'
  });
  // 等待一秒
  await sleep(1000);
  // eval
  const data = await page.evaluate(() => {
    const rank = document.querySelector('.css-1x529is-RankNumber');
    const submit = document.querySelectorAll('.css-i7v0bm-StackRow');
    const array = Array.from(submit)
    const newarr = array.map(e=>{return e.innerText})
    return {
        rank: rank.innerText,
        newarr
    } 
    // console.log("这段文字来自evaluate")
  });
  console.log('rank data', data);
  await page.screenshot({
    path: './yanboyi.png'
  })
  browser.close();
}
getLeetCode();
