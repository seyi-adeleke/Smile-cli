const ora = require('ora');


const spinner = new ora({
	text: 'Fetching Current Data Balance',
});


module.exports = {
    start_spinner: () => {
        spinner.start();
    },
    stop_spinner: () => {
        spinner.stop();
    },
    succeed_spinner: () => {
        spinner.succeed();
    },
    failure_spinner: () => {
        spinner.fail('There was an error fetching your balance, check the username/password provided and ensure you have an internet connection.');
    }
}