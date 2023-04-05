const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'd4',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Si un jugador novato solicita orientación o ayuda en el juego, es recomendable que un miembro experimentado lo aconseje. Si llegan miembros nuevos al gremio, es deber de los jugadores darle la bienvenida.`, ephemeral: true })
  }
      			

};
