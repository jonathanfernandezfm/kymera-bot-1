const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'regla4',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Evita mencionar reiteradas veces a un mismo usuario y también evita enviar el mismo mensaje muchas veces seguidas para mantener el chat limpio.`, ephemeral: true })
  }
      			

};
