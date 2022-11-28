const { EmbedBuilder } = require('discord.js');
const { rol_formulario } = require('../data/db.json');

module.exports = {
	name: 'aceptar_formulario',
	description: 'Formulario aceptado',
	execute: async (interaction) => {
		if (!rol_formulario) {
			return await interaction.reply({
				content: '🔴 ERROR: El rol para usuarios aceptados no esta configurado, contacta con BkNcs',
				ephemeral: true,
			});
		}
		const previous_embed = interaction.message.embeds[0];
		const embed_formulario = EmbedBuilder.from(previous_embed)
			.setColor('#64FF64')
			.setDescription(`✅ Aceptado por el <@&1016042908257894460> - <@${interaction.user.id}> \nㅤ⠀⠀⠀⠀⠀⠀⠀\n`);

		await interaction.message.edit({
			embeds: [embed_formulario],
			components: [],
		});

		const user = interaction.message.mentions.users.first();
		const dmChannel = await user.createDM();

		const person = await interaction.guild.members.fetch(user.id);
		person.roles.add(rol_formulario);

		const embed_response = new EmbedBuilder()
			.setColor('#64ff64')
			.setTitle('`✅` __Tu formulario ha sido aceptado__ ')
			.setDescription(
				'**¡Has obtenido un nuevo rol!**\n\nPara navegar por nuestro Discord: \n> ➟ <#1041449500088221757>\n\nEs importante que leas la normativa si no lo has hecho anteriormente \n> ➟ <#1003699981032640542>\n\nLee el decálogo de los integrantes de nuestro gremio \n> ➟ <#1039132556165124116>\n\nConoce más acerca de los rangos del gremio y su funcionamiento \n> ➟ <#1015930698609213450>\n\nInfórmate acerca de los roles y como solicitarlos \n> ➟ <#1015940451410378832>\n'
			) // TODO

			.setImage('https://i.imgur.com/t6G2Us8.png');

		dmChannel.send({
			content: 'ㅤ    ',
			embeds: [embed_response],
		});
	},
};
