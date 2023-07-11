const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'reglas',
    description: 'Crea mensaje de reglas',
    execute: async (msg) => {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('regla1')
                    .setLabel('📑 Comportamiento hacia otros usuarios')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('regla2')
                    .setLabel('📑 Temas de conversación')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('regla3')
                    .setLabel('📑 Spam')
                    .setStyle(ButtonStyle.Secondary)
            );
        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('regla4')
                    .setLabel('📑 Menciones y flood')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('regla5')
                    .setLabel('📑 Tickets de soporte')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('regla6')
                    .setLabel('📑 Uso adecuado de canales')
                    .setStyle(ButtonStyle.Secondary)
            );

        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });
        await msg.channel.send({
            content: 'https://i.imgur.com/UFuYm7F.png',
        });
        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });

        await msg.channel.send({
            components: [row],
        });

        await msg.channel.send({
            components: [row1],
        });
        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });
        await msg.channel.send({
            content: 'https://i.imgur.com/k9IZzBK.png',
        });
        await msg.delete();
    },
};
