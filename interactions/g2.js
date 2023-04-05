const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'guia2',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Se intentará reclutar jugadores que quieran aprender y mejorar en PVP.`, ephemeral: true })
  }
      			

};
