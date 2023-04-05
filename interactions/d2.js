const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'd2',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Todos los miembros del gremio tienen el deber de estar comprometidos con el mismo y ser leal a Hydra. El compromiso se evaluará de distintas maneras, y cada miembro aportará de acuerdo a sus capacidades con miras al bien común. Se solicitará demostrar el mismo en ocasiones estratégicas para el gremio. Fallar en este deber de manera grave o reiterada implica sanciones que pueden llevar a la expulsión del gremio.`, ephemeral: true })
  }
      			

};
