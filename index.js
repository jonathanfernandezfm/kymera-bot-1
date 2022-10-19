require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js');
const { TOKEN } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

['command_handler'].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

client.login(TOKEN);