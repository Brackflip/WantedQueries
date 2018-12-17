var pageObj = {}


module.exports = {
    beforeEach: browser => {
        pageObj = browser.page.pageObject()
        pageObj.navigate()
        pageObj.waitForElementPresent('@app', 4000, 'Found the site ')
    },

    after: browser => {
        browser.end()
    },
    //submit a valid query
    'Submit A Valid': browser => {
        pageObj
           .enterWarrantFunction()
           
    },
}