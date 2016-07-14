import browser, * as config from './webdriver.config.js';

const automationHandler = (req, res) => {
  browser
    .init()
    .url(config.url)
    .selectByAttribute('#grindOption', 'value', '79')
    // .setValue(config.searchBar, config.message)
    // .click(config.buttonByName)
    // .getTitle()
    // .then(title => res.send(`The title received was ${title}`))
    .pause(config.waitTime)
    .end();
};

export default automationHandler;