'use strict';

const SlackBot = require('slackbots');
const dict = require('./answer.js');

//Personalize bot parameters
let botToken, botId;
try {
  const config = require('../config.json');
  botToken = config.apiToken;
  botId = config.botId;
} catch (exception) {
  if (process.env.BOT_TOKEN && process.env.BOT_ID) {
    botToken = process.env.BOT_TOKEN;
    botId = process.env.BOT_ID;
  } else {
    console.log('Initialisation Error: Please provide configuration options');
    process.exit(1);
  }
}

// create a bot
const bot = new SlackBot({
  token: botToken,
  name: 'Ronnie Schäfer'
});

const default_params = {
  as_user: true
};

bot.on('start', function () {
  bot.postMessageToGroup('dev', 'BOT RUNNING', default_params, null);
});

bot.on('message', function (data) {

  console.log('=============================================');
  console.log(data);

  switch (data.type) {
    case 'message': {
      const toChannel = data.channel;
      if (toChannel && data.bot_id !== botId) {
        const msg = data.text.toLowerCase();
        dict.forEach(d => {
          if (d.keys.some(k => ~msg.indexOf(k))) {
            let message = d.message;
            const params = {as_user: default_params.as_user};
            if (typeof message === 'function')
              message = message();
            if (message.params) {
              for (const attrname in message.params) {
                params[attrname] = message.params[attrname];
              }
              message = message.msgString;
            }
            bot.postMessage(toChannel, message, params);
          }
        });
      }
    }
  }
});
