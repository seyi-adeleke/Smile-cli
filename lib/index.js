const Nightmare = require('nightmare');
const chalk = require('chalk');

const validator = require('./utils/validation');
const selectors = require('./utils/selectors');
const spinner = require('./utils/spinner');

const nightmare = Nightmare();


const smile_selector = selectors.smile_selector;


const handler = (program) => {
  if(!(validator(program).status)) {
      console.log(validator(program).message);
      return;
  }
  spinner.start_spinner();

  nightmare
    .goto('https://smile.com.ng/scp/')
    .insert('#loginform input[type="text"]', program.username)
    .insert('#loginform input[type="password"]', program.password)
    .click('.login_btn')
    .wait(smile_selector)
    .evaluate((smile_selector) => {
        return (document.querySelector(smile_selector).innerText);
      }, smile_selector)
    .end()
    .then(text => {
        spinner.succeed_spinner();
        console.log(chalk.bold(text));
    })
    .catch(error => {
        spinner.failure_spinner();
    })
}



module.exports = handler;