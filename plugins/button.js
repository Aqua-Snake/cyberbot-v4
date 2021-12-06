const Asena = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');
const got = require('got');

let whb = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'test', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
        {buttonId: 'alive', buttonText: {displayText: 'Test'}, type: 1},
        
      ]
      
      const buttonMessage = {
          contentText: "*Testing buttons*",
          footerText: 'ᴄʏʙᴇʀ ʙᴏᴛ © ɢʟᴏʙᴀʟ ᴇᴅɪᴛɪᴏɴ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
