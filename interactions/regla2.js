const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'regla2',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Este servidor es principalmente un servidor dedicado a diversos juegos de MMORPG, así mismo se permiten conversaciones sobre otros temas siempre y cuando no sean delicados. `, ephemeral: true })
  }
      			

};
