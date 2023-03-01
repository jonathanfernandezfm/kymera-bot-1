const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'invitacion',
	description: 'Crea mensaje de reglas',
	execute: async (msg) => {

    
  await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n\ https://discord.gg/DregQjVE',
    });

		await msg.delete();
	},
};


