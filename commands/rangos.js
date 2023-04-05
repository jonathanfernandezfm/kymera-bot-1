const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'rangos',
	description: 'Rangos',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new StringSelectMenuBuilder().setCustomId('rangos').setPlaceholder('☰⠀Abrir menú de rangos del gremio').addOptions(
				{
					label: 'Rangos administrativos',
					value: 'distribucion',
					emoji: '1038183225350180954',
				},
				{
					label: 'Rangos de usuario',
					value: 'reparto',
					emoji: '1038183335589060661',
				},
				{
					label: 'Vacantes disponibles',
					value: 'reclamar',
					emoji: '🗳',
				}
			)
		);

    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

       
    })
    await msg.channel.send({
			content: 'https://i.imgur.com/Eskw9NQ.png',

       
    })

    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

       
    })
await msg.channel.send({
			content: '\n\n 🥇 Aquí encontrarás información esencial sobre los rangos representativos de nuestra comunidad. Para entender el funcionamiento interno de Hydra **es necesario que conozcas el trabajo que realiza cada rango.**\n\n 🗳 Accede al apartado de vacantes para ver los puestos disponibles. Contacta con un integrante de moderación para aplicar a cualquiera de ellos.',
		});

    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

       
    })
		await msg.channel.send({
			components: [row],
		});

		await msg.delete();
	},
};
