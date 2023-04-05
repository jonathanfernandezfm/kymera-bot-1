const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'guia4',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Asesorar y orientar a los nuevos integrantes`, ephemeral: true })
  }
      			

};
