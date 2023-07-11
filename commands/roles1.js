const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'roleshydra',
    description: 'Crea mensaje de formulario',
    execute: async (msg) => {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('tank')
                    .setLabel('Tank')
                    .setEmoji('1070777995553411082')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('healer1')
                    .setLabel('Nature')
                    .setEmoji('1070779660587237476')
                    .setStyle(ButtonStyle.Secondary)
            )

            .addComponents(
                new ButtonBuilder()
                    .setCustomId('healer2')
                    .setLabel('Holy')
                    .setEmoji('1070781230687203338')
                    .setStyle(ButtonStyle.Secondary)
            )

            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rdps')
                    .setLabel('Rango')
                    .setEmoji('1070784604639858798')
                    .setStyle(ButtonStyle.Secondary)
            )

            .addComponents(
                new ButtonBuilder()
                    .setCustomId('mdps')
                    .setLabel('Melee')
                    .setEmoji('⚔️')
                    .setStyle(ButtonStyle.Secondary)
            );

        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fama')
                    .setLabel('Fama')
                    .setEmoji('🎓')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('ganking1')
                    .setLabel('Ganking')
                    .setEmoji('🔪')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('hellgate')
                    .setLabel('Hellgate')
                    .setEmoji('💥')
                    .setStyle(ButtonStyle.Secondary)
            );
        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('avaloniana')
                    .setLabel('Avaloniana')
                    .setEmoji('🌟')
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('caerleon')
                    .setLabel('Caerleon')
                    .setEmoji('🐺')
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('roaming')
                    .setLabel('Roaming')
                    .setEmoji('🐎')
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            );
        const row3 = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('requisitosrol')
                .setLabel('¿Cómo obtener los roles de actividades bloqueados?')
                .setStyle(ButtonStyle.Primary)
        );

        const row4 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('crafter')
                    .setLabel('Crafter')
                    .setEmoji('🧱')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('farmer')
                    .setLabel('Farmer')
                    .setEmoji('🔨')
                    .setStyle(ButtonStyle.Secondary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('trader')
                    .setLabel('Trader')
                    .setEmoji('💶')
                    .setStyle(ButtonStyle.Secondary)
            );
        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });

        await msg.channel.send({
            content: 'https://i.imgur.com/zUowfAx.png',
        });

        await msg.channel.send({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **ROLES DE ESPECIALIZACIÓN:**\n➥ Elige máximo dos roles diferentes que sean los que más uses.',

            components: [row],
        });

        await msg.channel.send({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **ROLES DE ACTIVIDADES:**\n➥ Estas actividades no necesitan requisitos previos para la obtención del rol.',

            components: [row1],
        });

        await msg.channel.send({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **ROLES DE ACTIVIDADES:**\n➥ Estas actividades necesitan requisitos previos para la obtención del rol.',

            components: [row2],
        });

        await msg.channel.send({
            content: '',
            components: [row3],
        });

        await msg.channel.send({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **ROLES DE ALBION ONLINE:**\n➥ Especialidad del jugador en el juego.',

            components: [row4],
        });

        await msg.delete();
    },
};
