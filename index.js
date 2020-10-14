var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

  const url = "https://www.thezebra.com/";

  const carInsuranceButton = By.id("7eea119d-4330-4806-a866-6dd7eb3e75fcauto");
  var zipCode = By.name("zipcode");
  var startButton = By.css("button");

  let driver = new webdriver.Builder()
    .withCapabilities({ browserName: "chrome" })
    .build();
  driver.get(url);
  driver.manage().window().maximize();

  // Select Car Insurance option amd enter Zip Code
  driver.wait(until.elementsLocated(carInsuranceButton));
  driver.findElement(carInsuranceButton).click();
  
  driver.wait(until.elementsLocated(zipCode));
  driver.findElement(zipCode).sendKeys("89012");
  
  driver.wait(until.elementIsEnabled(startButton));
  driver.findElement(startButton).click();

  driver.sleep(20000);
  //  driver.quit();


// Start - Click on Save & Continue
// Populate car information - Click on Save & Continue
// Driver information - Click on Save & Continue

