const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'd7',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> El gremio recauda dinero por la vía de impuestos del silver recogido, eventos DNT y donaciones recibidas de los jugadores. Este dinero es reinvertido mirando el interés del gremio y el bien común, con gastos tales como: recompensas de eventos, equipo, gastos de gremio, reparaciones.`, ephemeral: true })
  }
      			

};
