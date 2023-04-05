const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'd8',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Todos los miembros deben estar registrados en este discord. No es obligación hablar, y se aconseja al menos estar de oyente. El que, siendo miembro, se retire del discord del gremio, podrá ser expulsado del gremio. Por otro lado, sólo los miembros del gremio pueden tener acceso total a discord.`, ephemeral: true })
  }
      			

};
