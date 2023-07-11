const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'tutoriales',
    description: 'Crea mensaje de reglas',
    execute: async (msg) => {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('tuto1')
                    .setLabel('🔗 Términos usados frecuentemente')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia2')
                    .setLabel('🔗 Sistema de Loot')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia4')
                    .setLabel('🔗 Sistema DNT')
                    .setStyle(ButtonStyle.Primary)
            );

        const row1 = new ActionRowBuilder()

            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia5')
                    .setLabel('🔗 Ascensos')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia6')
                    .setLabel('🔗 Sistema de roles')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia7')
                    .setLabel('🔗 Builds')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia8')
                    .setLabel('🔗 Crear evento')
                    .setStyle(ButtonStyle.Primary)
            );
        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });
        await msg.channel.send({
            content: 'https://i.imgur.com/LccH4UM.png',
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

        await msg.delete();
    },
};
