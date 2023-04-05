const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'normativa',
	description: 'Normativa',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new StringSelectMenuBuilder().setCustomId('normativa').setPlaceholder('☰⠀Abrir menú de normativas').addOptions(
				{
					label: 'Normativa General',
					value: 'general',
					emoji: '1070748609852751954',
				},
				{
					label: 'Normativa Caerleon',
					value: 'ncaerleon',
					emoji: '📕',
				},
				{
					label: 'Normativa Fama',
					value: 'nfama',
					emoji: '📘',
				},
        {
					label: 'Normativa Avalonianas',
					value: 'navalonianas',
					emoji: '1070750558434103296',
				}
			)
      );

    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

       
    })
    await msg.channel.send({
			content: 'https://i.imgur.com/a9WEhoO.png',

		})

    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

    })
await msg.channel.send({
			content: '\n\n 📚 Para el desarrollo de cada una de las actividades **existe una normativa vigente que es de obligación cumplir**. Todos los miembros del gremio tienen el deber de respetar las normas generales en el desarrollo de las actividades del gremio, de lo contrario, el equipo de administración tomará medidas.',
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
