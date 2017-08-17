const expect = require('chai').expect
const test = require('selenium-webdriver/testing')
const webdriver = require('selenium-webdriver');

const searchElementDescriptor = webdriver.By.name('q')
const searchTerm = 'testing selenium and mocha'
const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

describe('Google Search with selenium-webdriver promises', () => {
  test.after(() => driver.quit())

  test.it('recognizes entered search term', () => {
    driver.get('http://www.google.com')
    .then(() => {
      console.log('A');
      return driver.findElement(searchElementDescriptor)
    })
    .then(searchElement =>
      searchElement.sendKeys(searchTerm),
    )
    .then(() =>
      driver.findElement(searchElementDescriptor).getAttribute('value'),
    )
    .then((value) => {
      expect(value).to.equal(searchTerm)
    })
  })
});

describe ('Google Search with selenium-webdriver async', () => {
  
})
