const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'regla1',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Este servidor no acepta comportamientos inadecuados hacia cualquier otro miembro de este servidor. No se tolerarán comentarios racistas, homófobos, machistas, xenófobos. `, ephemeral: true })
  }
      			

};
