const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'guia3',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Se usará el canal general de Albion Online para reclutar a jugadores españoles y en el foro del juego`, ephemeral: true })
  }
      			

};
