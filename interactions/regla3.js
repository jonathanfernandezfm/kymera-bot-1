const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'regla3',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Los enlaces están permitidos en los canales de texto siempre y cuando no sea una invitación de discord, un enlace malicioso o se envíe con fines de hacer publicidad.`, ephemeral: true })
  }
      			

};
