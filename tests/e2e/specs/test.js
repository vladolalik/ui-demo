// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "check if books are loaded properly from API": browser => {
    browser
      .init()
      .waitForElementVisible(".cv-tile-expandable")
      .assert.elementPresent("h4:first-of-type")
      .assert.containsText("h4:first-of-type", "Harry Potter")
      .assert.elementCount("h4", 5)
      .pause(3000)
      .end();
  },

  "select first book and edit title, check if its changed in list after update": browser => {
    browser
      .init()
      .waitForElementNotVisible(".bx--loading-overlay.cv-loading")
      .click(".cv-tile-expandable")
      .assert.containsText("h4:first-of-type", "Harry Potter")
      .pause(1000)
      .waitForElementVisible(".book-detail a:first-of-type")
      .click(".book-detail a:first-of-type")
      .pause(1000)
      .clearValue("input.bx--text-input:first-of-type")
      .setValue("input.bx--text-input:first-of-type", "A Nový názov")
      .pause(1000)
      .click(".update-book")
      .waitForElementVisible(".book-updated")
      .pause(1000)
      .click(".book-list-menu-item")
      .waitForElementVisible(".bx--loading-overlay.cv-loading")
      .waitForElementNotVisible(".bx--loading-overlay.cv-loading")
      .assert.containsText("h4:first-of-type", "A Nový názov")
      .pause(3000)
      .end();
  }
};
