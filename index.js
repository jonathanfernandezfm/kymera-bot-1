require('dotenv').config();

const { Client, GatewayIntentBits, Collection, Presence } = require('discord.js');
const { TOKEN } = process.env;


const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.commands = new Collection();
client.interactions = new Collection();

client.on("ready", () => {
  function presence(){
  client.user.setPresence({
    status: "online",
    activity: {
      name: "Albion Online",
      type: "playing"
    } 
  });
}
  presence();
  console.log("BOT LISTO");
});


['event_handler', 'command_handler', 'interaction_handler'].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

client.login(TOKEN);
