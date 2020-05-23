let params = {};

const handle_greeting = (bot, data) => bot.postMessage(data.channel, `<@${data.user}> hello :slightly_smiling_face:`, params);

module.exports = {
    handle_greeting,
};