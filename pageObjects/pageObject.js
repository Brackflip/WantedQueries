var enterWarrant = {
    enterWarrantFunction: function() {
        this.click('@menuButton')
        this.click('@dropDownEnter')
        this.expect.element('@titleBar').text.to.contain('Wanted Queries')
        return this
    },



}


module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [enterWarrant],
    elements: {
            app: '#pageWrap',
            menuButton: 'div[class="bm-burger-button"]',
            dropDownEnter: 'p[name="enterOption"]',
            titleBar: 'h1[class="titleBar"]'


    },


}