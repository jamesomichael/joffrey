const SlackBot = require('slackbots');

const initialise_bot = () => {
    const bot = new SlackBot({
        'token': process.env.SLACK_TOKEN, 
        'name': 'geoffrey'
    });
    
    return bot;
};

module.exports = {
    initialise_bot,
};