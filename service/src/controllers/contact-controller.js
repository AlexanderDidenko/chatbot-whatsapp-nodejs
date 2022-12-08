const { client, MessageMedia } = require('../server');
const { resolve } = require('path');

const contact = async (msg) => {
  const chat = await msg.getChat();
  chat.sendStateTyping();

  client.setPrevMessage('contact');
  client.sendMessage(
    msg.from,
    '*Your Name' +
      '\n\nYour Address' +
      '\n☎️ *telephone* - 123456789 ' +
      '\n✉️ *E-mail* - xyz@gmail.com' +
      '\n\n\n *WANT TO KNOW MORE?*' +
      '\n\n *1* - Yes' +
      '\n *0* - Back'
  );
};

const choseContact = async (msg) => {
  const media = MessageMedia.fromFilePath(resolve('public/images/mapa.jpg'));
  switch (msg.body) {
    case '1':
      msg.reply('Wait, processing the image... 😙');
      client.sendMessage(msg.from, media);
      break;
    default:
      client.sendMessage(
        msg.from,
        'OPSS! 😅 I apologize. but you typed something invalid, type *BACK* if you have any questions'
      );
  }
};

module.exports = {
  contact,
  choseContact
};
