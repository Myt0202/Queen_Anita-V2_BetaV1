//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348135216800";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0E0QlF0Z2tsSlpQS1pQb01uNFR5MzdBdktpWXdzdnVTNnlQc1NPdVNrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVU5alQzRUhKT1JRMTFUSGhCYVR5MTdzTU9iWVZGUEEzUlhQQlZrRUVFQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRlQ2dVorMU16R00yNXcvM2dCNVhIYWllcTFOcVByUzFFZjB2bFIxWWx3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpMVQzWkNPVTJBdktjOGQ0MTR5dXE0eXNmZzNCSVdRYnRKRDBBODZEeWowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOcGxSQk5TV1J0WUFaN2ZNaVdNY3plRFZNNGhvdWtKK3N4ZGVLVGtpWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitqVDZiQ3lzRHE1Zm8yT2d2MjJOdEtuNytpVG1GaExpdXcvVDg5Yzg5Rmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09kdzNrdng5MkFqd05oU01pL0VoenlVUkJzbmJrcGZRblpvQm1jQVQzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGxvTERFdkZVdis1TnloUC9UakpTWEJZSWJTZHRsU0pJanFVbHpWUXh6Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRhZW0weXRRZlFuQjZiWW1wb1dlWHhsd2V4VjF2RENNS2k2ZGg4NjlqYVZOd3JNZmJZb1lIY1piRHQ2V1JsU0tyVkFJOE50Umd2NVNhY3JtV21RQkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6ImM2ZHRNMTArZEQrL001clZ6dVNKL0pYOWFHMW0xa3ZGcEZVdjdVWHpwMVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEzNTIxNjgwMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTJBMEUxOEQ2NUUwRDEwOUFDOUE4RUIwNzY5QkI2MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzOTE2ODMzfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJacVY4X3h3cFJZU0Y2MmlVODgzelNRIiwicGhvbmVJZCI6IjRkZDk3N2Y3LTA0NTctNDY5NC05YjAyLWIwOWNjYTQ1MTc5NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMXNnTk85VXYyVEh2MlNNWHBMbXJpR1hCV009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTd2UmZNNVVGZnVkZzNVN2hzYXFtQldJSkswPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlM1VFM4WEYyIiwibWUiOnsiaWQiOiIyMzQ4MTM1MjE2ODAwOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibXl0ZW50ZXJwcmlzZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFhkeEpnREVJN0VnN1lHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ3JTSGNpV2lyd2hrMWt2VnB2ZTYxeHRrU3VucWw2QUdUZGNRQUhUZnAyMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSm5Pand2MEpKblgvakdKVFowSytQMmlKTk11VmZ6VjBwVU95OGdka3kwVHFobTRtdWNQcnRsV1IweVRsL3RBM1NUNFZQT2FEMlQrMmdlTHp3cFRxQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InBGNEYyOGFya1ZXbE5MTlNTelQ0ZDB0NGIrOFJ0SUd1NnlrQStOS0lIdjZXalkvMGp0SitGWER4N0hmSmQwUU5EaWYxYzdLcGlXeE9TdThrWmFidkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzNTIxNjgwMDo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFxMGgzSWxvcThJWk5aTDFhYjN1dGNiWkVycDZwZWdCazNYRUFCMDM2ZHQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM5MTY4MjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRk1sIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
