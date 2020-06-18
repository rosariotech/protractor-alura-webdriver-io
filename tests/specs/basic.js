describe('webdriver.io page', () => {
    xit('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
    it('deve procurar por \"install\"', ()=>{
        browser.url('https://webdriver.io')
        const search = $('Search')
        browser.elementSendKeys(search, 'Install');

    })
})