const SlackBot = require('slackbots');

const initialise_bot = () => {
    const bot = new SlackBot({
        'token': process.env.SLACK_TOKEN, 
        'name': 'joffrey'
    });

    return bot;
};

module.exports = {
    initialise_bot,
};