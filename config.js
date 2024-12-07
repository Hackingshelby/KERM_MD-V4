const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DZIgwQ5Q#aIvVmdr7tp-m0i2J11_xxlXqHI31l9FM-3G-CjhJvpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://https://pomf2.lain.la/f/omkn39s8.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR IM ONLINE I'M KERM_MD-V4 WHATSAPP BOT\n\n> 𝖡𝖸 𝖪𝖦𝖳𝖤𝖢𝖧",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "➺『🌹𝐊𝐈𝐌𝐁𝚵𝐥ꝛ፝֟𝐥𝐘❀𝐊𝐀𝐑𝐌𝐀✿𝐋𝐔𝐂𝚰𝐅𝚵𝚪🌹』࿐",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
