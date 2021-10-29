/* Copyright (C) 2021 Aqua-Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua-Snake
*/ 

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");
const fs = require('fs');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {

	Asena.addCommand({pattern: 'info', fromMe: true, desc: 'Infomation about CyberBot'}, (async (message, match) => {

	 	await message.sendMessage(fs.readFileSync('media/CyberBot.jpg'), MessageType.image, {caption: `_____ *Cyber Bot* _____\n\n Creator : Aqua Snake (.infodev for more details) \n Github : https://github.com/Aqua-Snake/CBot \n Whatsapp group : https://chat.whatsapp.com/L8avH9Dt4zD68GUPSQodx1 \n Telegram : https://t.me/cbot_support \n Website : https://aqua-snake.github.io/CBot/ `});

	}));

	Asena.addCommand({pattern: 'infodev', fromMe: true, desc: 'Developer Infomation'}, (async (message, match) => {

		await 	message.sendMessage(fs.readFileSync('media/aqualogo.jpg'), MessageType.image, {caption: `_____ *Bot Developer* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Snake/ \n Website : https://aqua-snake.github.io/Aqua-Snake/ `});

	}));
	Asena.addCommand({pattern: 'infoca ', fromMe: true, desc: 'Cyber Army Infomation'}, (async (message, match) => {

  await message.sendMessage(fs.readFileSync('media/armylogo.jpg'), MessageType.image, {caption: `_____ *Bot Developer* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Snake/ \n Website : https://aqua-snake.github.io/Aqua-Snake/ `});
 }));

}

else if (Config.WORKTYPE == 'public') {

	Asena.addCommand({pattern: 'info', fromMe: true, desc: 'Infomation about CyberBot' }, (async (message, match) => {

	    
	    await message.sendMessage(fs.readFileSync('media/CyberBot.jpg'), MessageType.image, {caption: `_____ *Cyber Bot* _____\n\n Creator : Aqua Snake (.infodev for more details) \n Github : https://github.com/Aqua-Snake/CBot \n Whatsapp group : https://chat.whatsapp.com/L8avH9Dt4zD68GUPSQodx1 \n Telegram : https://t.me/cbot_support \n Website : https://aqua-snake.github.io/CBot/ `});

    }));
    Asena.addCommand({pattern: 'devinfo', fromMe: true, desc: 'Developer Infomation'}, (async (message, match) => {

		await 	message.sendMessage(fs.readFileSync('media/aqualogo.jpg'), MessageType.image, {caption: `_____ *Bot Developer* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Snake/ \n Website : https://aqua-snake.github.io/Aqua-Snake/ `});

	}));
	Asena.addCommand({pattern: 'cainfo ', fromMe: true, desc: 'Cyber Army Infomation'}, (async (message, match) => {

  await message.sendMessage(fs.readFileSync('media/armylogo.jpg'), MessageType.image, {caption: `_____ *Cyber Army* _____\n\n Creator : Exynos  \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Snake/ \n Website : https://aqua-snake.github.io/Aqua-Snake/ `});
 }));
}