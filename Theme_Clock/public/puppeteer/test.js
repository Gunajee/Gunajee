const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fddbdadffefcfcbefbfaaccccaeafdd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('button');
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fddbdadffefcfcbefbfaaccccaeafdd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('div');
    const result1 = await page.evaluate(()=>{
      let heading = document.querySelector("#toggleButton");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fddbdadffefcfcbefbfaaccccaeafdd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const result = await page.evaluate(()=>{
      let button = document.querySelector("#clock-container");
      return button.innerHTML;
    })
    const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#second");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fddbdadffefcfcbefbfaaccccaeafdd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const result = await page.evaluate(()=>{
      let button = document.querySelector("#clock");
      return button.innerHTML;
    })
	const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#minute");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fddbdadffefcfcbefbfaaccccaeafdd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const result = await page.evaluate(()=>{
      let button = document.querySelector("#time");
      return button.innerHTML;
    })
    const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#date");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fddbdadffefcfcbefbfaaccccaeafdd.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
	const result = await page.evaluate(()=>{
      let button = document.querySelector("#hour");
      return button.innerHTML;
    })
    const result1 = await page.evaluate(()=>{
      let button = document.querySelector("#center-point");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase6:success');
  }
  catch(e){
    console.log('TESTCASE:testcase6:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();
