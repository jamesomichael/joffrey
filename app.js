const { initialise_bot } = require('./modules/config');
const { handle_greeting } = require('./modules/misc');
const { get_gif_by_query } = require('./modules/fun');

if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: './.env' });

const bot = initialise_bot();

bot.on('error', error => console.error(error));

bot.on('message', (data) => {
    if (data.type !== 'message' || data.subtype === 'bot_message' || !data.text) return;

    console.log(JSON.stringify(data, null, 4));
    
    if (data.text.includes('<@U014JK6JPK3>')) { 
        data.text = data.text.toLowerCase();

        if (data.text.match(/gif /)) get_gif_by_query(bot, data);
        else if (data.text.match(/hi|hello|sup|hey/)) handle_greeting(bot, data);
    }
});