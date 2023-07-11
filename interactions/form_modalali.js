const {
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
} = require('discord.js');
const { canal_formulario_ali } = require('../data/db.json');

module.exports = {
    name: 'formularioes',
    description: 'Formulario modal',
    execute: async (interaction) => {
        if (!canal_formulario_ali) {
            return await interaction.reply({
                content:
                    '🔴 ERROR: El canal para mandar formularios no esta configurado, contacta con BkNcs',
                ephemeral: true,
            });
        }

        const modal = new ModalBuilder()
            .setCustomId('formulario_modal_ali')
            .setTitle('Solicitud de alianza');

        const nombreInput = new TextInputBuilder()
            .setCustomId('pregunta_nombre')
            .setLabel('🚩 Nombre del gremio/alianza')
            .setStyle(TextInputStyle.Short);

        const horarioInput = new TextInputBuilder()
            .setCustomId('pregunta_horario')
            .setLabel('🕒 Horario del gremio/alianza')
            .setStyle(TextInputStyle.Short);

        const contenidoInput = new TextInputBuilder()
            .setCustomId('pregunta_contenido')
            .setLabel('🤝 ¿Por qué quieres formar alianza con Hydra?')
            .setStyle(TextInputStyle.Short);

        const guildInput = new TextInputBuilder()
            .setCustomId('pregunta_guild')
            .setLabel('👥 Integrantes activos del gremio/alianza')
            .setStyle(TextInputStyle.Short);

        const rolInput = new TextInputBuilder()
            .setCustomId('pregunta_rol')
            .setLabel('⚔️ Breve resumen del contenido que se ofrece')
            .setStyle(TextInputStyle.Paragraph);

        const actionRow1 = new ActionRowBuilder().addComponents(nombreInput);
        const actionRow2 = new ActionRowBuilder().addComponents(horarioInput);
        const actionRow3 = new ActionRowBuilder().addComponents(contenidoInput);
        const actionRow4 = new ActionRowBuilder().addComponents(guildInput);
        const actionRow5 = new ActionRowBuilder().addComponents(rolInput);

        modal.addComponents(
            actionRow1,
            actionRow2,
            actionRow3,
            actionRow4,
            actionRow5
        );

        return await interaction.showModal(modal);
    },
};
