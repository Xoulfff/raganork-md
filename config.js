const fs = require('fs');
const { Sequelize } = require('sequelize');
const isVPS = !(__dirname.startsWith("/rgnk") || __dirname.startsWith("/skl"));
const isHeroku = __dirname.startsWith("/skl");
const isKoyeb = __dirname.startsWith("/rgnk");
const isRailway = __dirname.startsWith("/railway");
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true',fault2='on') {
    return ((text === fault) || (text === fault2));
}
const settingsMenu = [
    {title: "PM antispam block", env_var: "PM_ANTISPAM"},
    {title: "Auto read all messages", env_var: "READ_MESSAGES"},
    {title: "Auto read command messages", env_var: "READ_COMMAND"},
    {title: "Auto read status updates", env_var: "AUTO_READ_STATUS"},
    {title: "Admin sudo acces mode (group commands only)", env_var: "ADMIN_ACCESS"},
    {title: "With & without handler mode", env_var: "MULTI_HANDLERS"},
    {title: "Auto reject calls", env_var: "REJECT_CALLS"},
    {title: "Always online", env_var: "ALWAYS_ONLINE"},
    {title: "PM Auto blocker", env_var: "PMB_VAR"},
    {title: "Disable bot in PM", env_var: "DIS_PM"}
  ]
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
if (!(process.env.SESSION || process.env.SESSION_ID)) throw new Error("No session found, add session before starting bot")
module.exports = {
    VERSION: 'v4.0.0',
    ALIVE: process.env.ALIVE || "*✰ 𝐇͢ᴇ⃗ʏʏ᷏ {sender}*
 
*✰ 𝐘͢ᴇ⃗ʜʜ᷏ 𝐈͢ᴍ ᷏𝐇͢ᴇ⃗ʀᴇ᷏*

*✰ 𝐘͢ᴇ⃗ʜʜ᷏ 𝐈͢ᴛ⃗s᷏ 𝐌͢ᴇ 𝐗͢ᴏ⃗ᴜʟ᷏ 𝐒͢ᴇ⃗ʀ᷏*

*✰ 𝐄͢ᴅ⃗ᴀ᷏ 𝐌͢ᴡ⃗ᴏɴᴇ᷏ 𝐇͢ᴀ⃗ᴘᴘʏ᷏ 𝐀͢ʟ⃗ʟᴇ᷏*",
    BLOCK_CHAT: process.env.BLOCK_CHAT || '',
    PM_ANTISPAM: convertToBool(process.env.PM_ANTISPAM) || '',
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    MANGLISH_CHATBOT: convertToBool(process.env.MANGLISH_CHATBOT) || false,
    ADMIN_ACCESS: convertToBool(process.env.ADMIN_ACCESS) || true,
    PLATFORM:isHeroku?"Heroku":isRailway?"Railway":isKoyeb?"Koyeb":"Other server",isHeroku,isKoyeb,isVPS,isRailway,
    AUTOMUTE_MSG: process.env.AUTOMUTE_MSG || '_Group automuted!_\n_(edit AUTOMUTE_MSG)_',
    ANTIWORD_WARN: process.env.ANTIWORD_WARN || '',
    ANTI_SPAM: process.env.ANTI_SPAM || '919074309534-1632403322@g.us',
    MULTI_HANDLERS: convertToBool(process.env.MULTI_HANDLERS) || false,
    DISABLE_START_MESSAGE: convertToBool(process.env.DISABLE_START_MESSAGE) || false,
    NOLOG: process.env.NOLOG || false,
    DISABLED_COMMANDS: (process.env.DISABLED_COMMANDS ? process.env.DISABLED_COMMANDS.split(",") : undefined) || [],
    ANTI_BOT: process.env.ANTI_BOT || '',
    ANTISPAM_COUNT: process.env.ANTISPAM_COUNT || '6/10', // msgs/sec
    AUTOUNMUTE_MSG: process.env.AUTOUNMUTE_MSG || '_Group auto unmuted!_\n_(edit AUTOUNMUTE_MSG)_',
    AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS) || false,
    READ_MESSAGES: convertToBool(process.env.READ_MESSAGES) || false,
    PMB_VAR: convertToBool(process.env.PMB_VAR) || false,
    DIS_PM: convertToBool(process.env.DIS_PM) || false,
    REJECT_CALLS: convertToBool(process.env.REJECT_CALLS) || false,
    PMB: process.env.PMB || '_Personal messages not allowed, BLOCKED!_',
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    SESSION: (process.env.SESSION || process.env.SESSION_ID || 'Raganork~8fc243ce990a4db1a8f883e8f8c036a7:5a2b5655592f55784d6d4d3d').trim() || '',
    IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
    RG: process.env.RG || '919074309534-1632403322@g.us,120363116963909366@g.us',
    BOT_INFO: process.env.BOT_INFO || '𝐗ᴏᴜᴋ 𝐌ᴅ;𝐗ᴏᴜʟ 𝐒ᴇʀ;0;https://i.imgur.com/CoAcgTb.jpeg;https://chat.whatsapp.com/BxR0LrCkAVKGHriVvo7sKy',
    RBG_KEY: process.env.RBG_KEY || '',
    ALLOWED: process.env.ALLOWED || '91,94,2',
    NOT_ALLOWED: process.env.ALLOWED || '91,94,212',
    CHATBOT: process.env.CHATBOT || 'off',
    HANDLERS: process.env.HANDLERS || '.,',
    STICKER_DATA: process.env.STICKER_DATA || "⺀𑁍 𝚾͢ᴏ᪳ᴜ᪳ʟ᷏᪳ 𝐒͢ᴇ᪳ʀ᷏᪳ ▸ᝃ〔🍉🐼〕


🍭㆒⾛⾜⾖㆒🦊


🌷㆒⾛⾜⾖㆒🌈


🌩️㆒⾛⾜⾖㆒🐨


🪁㆒⾛⾜⾖㆒🌗


🍉㆒⾛⾜⾖㆒🍓


🍒㆒⾛⾜⾖㆒🍿;

ㅤㅤㅤ⁹

ㅤㅤㅤ⁶

ㅤㅤㅤ³

ㅤㅤㅤ³

ㅤㅤㅤ⁶

ㅤㅤㅤ⁰

ㅤㅤㅤ⁵

ㅤㅤㅤ⁶

ㅤㅤㅤ⁴

ㅤㅤㅤ⁸",
    BOT_NAME: process.env.BOT_NAME || '𝐗ᴏᴜʟ 𝐌ᴅ',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? '⺀𑁍 𝚾͢ᴏ᪳ᴜ᪳ʟ᷏᪳ 𝐒͢ᴇ᪳ʀ᷏᪳ ▸ᝃ〔🍉🐼〕;🍃ഇ͎ꫧ᪳͢გവ᪳გ͎◕ കട᪳൬͎გ ලപꪆവ᪳გ◕🕊️;https://i.imgur.com/CoAcgTb.jpeg' : process.env.AUDIO_DATA,
    TAKE_KEY: process.env.TAKE_KEY || '',
    MODE: process.env.MODE || 'public',
    WARN: process.env.WARN || '4',
    ANTILINK_WARN: process.env.ANTILINK_WARN || '',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO || "",
    LANGUAGE: process.env.LANGUAGE || 'english',
    DEBUG: DEBUG,
    ACR_A: "ff489a0160188cf5f0750eaf486eee74",
    ACR_S: "ytu3AdkCu7fkRVuENhXxs9jsOW4YJtDXimAWMpJp",
    settingsMenu
};
