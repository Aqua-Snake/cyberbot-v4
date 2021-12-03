/* Copyright (C) 2020 Aqua Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/


const Asena = require('../events');
const {MessageType} = require('@aqua-snake/cyber-bot-web');


Asena.addCommand({pattern: 'del', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  await message.reply_message.delete();

}));
