/* Copyright (C) 2020 Aqua Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/

const Asena = require('../events');
const {MessageType} = require('@aqua-snake/cyber-bot-web');
const got = require('got');
const Config = require('../config');

const NEED_LOCATIONA = "*Invalid Request*"
const BOT = ":"
const NOT_FOUNDAC = "```oops...I couldn't find a category with this name. 😖```"


if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'ana ?(.*)', fromMe: true, desc: 'Chat with an AI Bot.\n Use .ana <message>'}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=update..&cf=ture`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*🤖 ' + BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDAC, MessageType.text);
	}
});
}
else if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'ana ?(.*)', fromMe: false, desc: 'Chat with an AI Bot.\n Use .ana <message>'}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=update..&cf=ture`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*🤖 ' + BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDAC, MessageType.text);
	}
});
}
