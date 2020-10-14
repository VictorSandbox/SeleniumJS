var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

const {expect, assert} = require('chai');

const url = "https://www.thezebra.com/";

describe('Zebra verification tests', function() {
  beforeEach(function() {
    driver = new webdriver.Builder().withCapabilities({'browserName' :'chrome'}).build();
    driver.get(url);
  });

  it('should display Page Title', async function(){
    await driver.sleep(2000);
    var pageTitle = await driver.getTitle();
    console.log(pageTitle);
    expect(pageTitle).to.contains("Zebra");
  })

  it('should contain how Zebra work text', async function(){
    var zebraWorkHeadline = await driver.findElement(webdriver.By.xpath("//h2[@class='how-zebra-works-headline display-5']")).getText();
    console.log(zebraWorkHeadline);
    expect(zebraWorkHeadline).to.contains("How does\nThe Zebra work?");
  })

  it('should display Zebra brand', async function(){
    await driver.wait(until.elementLocated(By.xpath("/html/body/div[2]/div[2]/a")), 10000);
      var zebraBrand = await driver.findElement(webdriver.By.xpath("/html/body/div[2]/div[2]/a")).isDisplayed();
      console.log(zebraBrand);
      expect(zebraBrand).to.true;  
  })

  it('should contain href redirecting to thezebra.com', async function(){
    await driver.wait(until.elementLocated(By.xpath("/html/body/div[2]/div[2]/a")), 10000);
      var hrefAttribute = await driver.findElement(webdriver.By.xpath("/html/body/div[2]/div[2]/a")).getAttribute("href");
      console.log(hrefAttribute);
      expect(hrefAttribute).to.equal("https://www.thezebra.com/");  
  })

  afterEach(function(){
    console.log("close brower");
    driver.quit();
  })
})