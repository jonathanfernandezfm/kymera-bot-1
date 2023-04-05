const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'd3',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Todos tienen libertad de emitir opinión sin censura previa, sin importar antigüedad o rango. Los miembros son responsables de sus propios dichos, y esta libertad no los exime del cumplimiento del deber de respeto.`, ephemeral: true })
  }
      			

};
