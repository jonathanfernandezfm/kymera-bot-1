const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'd5',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Se podrán remover jugadores por inactividad tanto en el juego como en el servidor de discord. Hydra está formada por gente comprometida y activa en el gremio. Cualquier jugador que vaya a estar ausente por un periodo de tiempo deberá comunicarlo en el canal habilitado "Ausencias".`, ephemeral: true })
  }
      			

};
