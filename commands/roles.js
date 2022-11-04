const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'roles',
	description: 'Roles',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('roles').setPlaceholder('Seleccionar una opción').addOptions(
				{
					label: 'Roles de armas',
					value: 'roles',
					emoji: '1022572341160587354',
				},
				{
					label: 'Requisitos para obtener rol',
					value: 'requisitos',
					emoji: '1034486619459309638',
				},
				{
					label: 'Reclamar rol',
					value: 'reclamarrol',
					emoji: '1034077724710535198',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setTitle('ㅤㅤㅤ               ❮❮    ISLA BRIDGEWATCH    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor(3697893)
			.setDescription(
				'\n\n> `🏝️` Aquí encontrarás información esencial sobre nuestra isla (situada en Bridgewatch portal), los cofres personales de los integrantes de la guild y el sistema de repartición de loot.\n\n> <:icono_obj:1035683134349529108> Hay disponible un cofre general donde los miembros KYMERA pueden repartir sin necesidad de que haya un integrante del equipo de administración.\n\n> `⚠️` Para ver los diferentes apartados que hay disponible actualmente, haz click en el menú desplegable de abajo.\n'
			)
			.setImage('https://i.imgur.com/x96O8cz.png');

		await msg.channel.send({
			content: 'ㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};