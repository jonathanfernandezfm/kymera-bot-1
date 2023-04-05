const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'guia6',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Denegar solicitudes que no cumplan los requisitos.`, ephemeral: true })
  }
      			

};
