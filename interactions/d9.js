const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'd9',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Cada jugador representa a Hydra, nuestra actitud define la reputación del gremio. Toda persona que desprestigie a la guild quedará totalmente fuera y sin opción de retorno.`, ephemeral: true })
  }
      			

};
