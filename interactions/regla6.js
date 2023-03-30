const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'regla6',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Cada canal tiene su propósito, no los uses de mala manera ya que podrías ser advertido y seguidamente baneado temporalmente del servidor.`, ephemeral: true })
  }
      			

};
