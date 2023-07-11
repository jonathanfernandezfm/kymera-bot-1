const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'denegar_reclamo_cofre',
    description: 'Cofre denegado',
    execute: async (interaction) => {
        const previous_embed = interaction.message.embeds[0];
        const embed_formulario = EmbedBuilder.from(previous_embed)
            .setColor('#fc0303')
            .setTitle('❌‎ Asignación de rol denegada');

        await interaction.message.edit({
            embeds: [embed_formulario],
            components: [],
        });

        const dmChannel = await interaction.message.mentions.users
            .first()
            .createDM();

        const embed_response = new EmbedBuilder()
            .setColor('#fc0303')
            .setTitle(
                '❌‎ No hemos podido asignarte el rol debido a que no cuentas con los requisitos mínimos. Inténtalo en otro momento'
            );

        dmChannel.send({
            content: 'ㅤ    ',
            embeds: [embed_response],
        });
    },
};
