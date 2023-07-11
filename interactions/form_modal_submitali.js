const {
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
} = require('discord.js');
const { canal_formulario_ali } = require('../data/db.json');

module.exports = {
    name: 'formulario_modal_ali',
    description: 'Formulario modal submit',
    execute: async (interaction) => {
        const nombre = interaction.fields.getTextInputValue('pregunta_nombre');
        const horario =
            interaction.fields.getTextInputValue('pregunta_horario');
        const contenido =
            interaction.fields.getTextInputValue('pregunta_contenido');
        const guild = interaction.fields.getTextInputValue('pregunta_guild');
        const rol = interaction.fields.getTextInputValue('pregunta_rol');

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('aceptar_formulario_ali')
                .setLabel('Aceptar alianza')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('denegar_formulario_ali')
                .setLabel('Denegar alianza')
                .setStyle(ButtonStyle.Danger)
        );

        const embed = new EmbedBuilder()
            .setColor('#ffca38')
            .setTitle('🤝 Nueva solicitud de alianza')
            .setDescription(
                `👤 Usuario en Discord: <@${interaction.user.id}>\nㅤ\n`
            )
            .setThumbnail(interaction.user.displayAvatarURL())
            .addFields(
                { name: '1) Nombre del gremio/alianza:', value: `> ${nombre}` },
                {
                    name: '2) Horario del gremio/alianza:',
                    value: `> ${horario}`,
                },
                {
                    name: '3) ¿Por qué quieres formar alianza con Hydra?:',
                    value: `> ${contenido}`,
                },
                {
                    name: '4) Integrantes activos del gremio/alianza:',
                    value: `> ${guild}`,
                },
                {
                    name: '5) Breve resumen del contenido que se ofrece:',
                    value: `> ${rol}`,
                }
            );

        const [, channel] = await Promise.all([
            interaction.guild.members.fetch(interaction.user.id),
            interaction.guild.channels.fetch(canal_formulario_ali),
        ]);

        return await Promise.all([
            channel.send({
                content: `> <@&1015296284359413842>, nuevo formulario de <@${interaction.user.id}>`,
                embeds: [embed],
                components: [row],
            }),
            interaction.reply({
                content:
                    '`✅` Tu formulario ha sido enviado correctamente a nuestro Guild Master y recibirás una respuesta pronto, sé paciente.',
                ephemeral: true,
            }),
        ]);
    },
};
