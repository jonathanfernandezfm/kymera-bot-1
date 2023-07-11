const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'guia',
    description: 'Crea mensaje de reglas',
    execute: async (msg) => {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia1')
                    .setLabel('📝 Residente en Europa - Horario Europeo')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia2')
                    .setLabel('📝 Jugador PVP mayoritariamente')
                    .setStyle(ButtonStyle.Secondary)
            );
        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia3')
                    .setLabel('📝 Reclutar activamente')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia4')
                    .setLabel('📝 Asesorar y orientar a los nuevos integrantes')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia5')
                    .setLabel('📝 Aceptar nuevas solicitudes')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('guia6')
                    .setLabel('📝 Denegar nuevas solicitudes')
                    .setStyle(ButtonStyle.Secondary)
            );

        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });
        await msg.channel.send({
            content: 'https://i.imgur.com/0QXxF64.png',
        });
        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });
        await msg.channel.send({
            content:
                '<:requisitos:1050724589661061130> **REQUISITOS REQUERIDOS PARA INGRESAR:**',
        });
        await msg.channel.send({
            components: [row],
        });

        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });

        await msg.channel.send({
            content:
                ':clipboard:  **FUNCIONES A LLEVAR A CABO POR UN <@&1016042908257894460>:**',
        });
        await msg.channel.send({
            components: [row1],
        });

        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });

        await msg.channel.send({
            content: 'https://i.imgur.com/wEIvqo0.png',
        });

        await msg.delete();
    },
};
