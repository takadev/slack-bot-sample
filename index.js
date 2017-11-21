const Botkit = require('botkit');
const controller = Botkit.slackbot();

controller.spawn({
    token : process.env.token
}).startRTM();

controller.hears('hello', [ 'direct_message', 'direct_mention', 'mention' ], (bot, message) => {
    bot.reply(message, 'Hello! I\'m a Tuna');
});
