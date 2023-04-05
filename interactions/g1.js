const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'guia1',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Todo aquel que no juegue en Horario Europeo (UTC +2) y no resida en Europa, no podrá ser aceptado en el gremio.`, ephemeral: true })
  }
      			

};
