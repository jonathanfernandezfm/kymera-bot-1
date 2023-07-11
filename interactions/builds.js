const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'builds',
    description: 'Builds interaction',
    execute: async (interaction) => {
        const embed_caerleon = new EmbedBuilder()
            .setColor(0x0099ff)
            .setDescription(
                '**[ACCEDER A LA BUILD COMPLETA](https://docs.google.com/spreadsheets/d/124RVREtD3Jftgh4BxyAnF9nuSCfbI9AHl3TFVzWc1eU/edit?usp=sharing)**'
            )
            .setFooter({ text: '📅 Última actualización 22/12/2022' });

        const embed_gank = new EmbedBuilder()
            .setColor(0x0099ff)
            .setDescription(
                '**[ACCEDER A LA BUILD COMPLETA](https://docs.google.com/spreadsheets/d/124RVREtD3Jftgh4BxyAnF9nuSCfbI9AHl3TFVzWc1eU/edit#gid=87672920)**'
            )
            .setFooter({ text: '📅 Última actualización 22/09/2022' });

        const embed_roaming1 = new EmbedBuilder()
            .setColor(0x0099ff)
            .setDescription(
                '**[ACCEDER A LA BUILD COMPLETA](https://docs.google.com/spreadsheets/d/124RVREtD3Jftgh4BxyAnF9nuSCfbI9AHl3TFVzWc1eU/edit#gid=1425643696)**'
            )
            .setFooter({ text: '📅 Última actualización 22/09/2022' });

        const embed_magos = new EmbedBuilder()
            .setColor(0x0099ff)
            .setDescription(
                '**[ACCEDER A LA BUILD COMPLETA](https://docs.google.com/spreadsheets/d/124RVREtD3Jftgh4BxyAnF9nuSCfbI9AHl3TFVzWc1eU/edit#gid=1502154789)**'
            )

            .setFooter({ text: '📅 Última actualización 22/12/2022' });

        const embed_avalonianas = new EmbedBuilder()
            .setColor(0x0099ff)
            .setDescription(
                '**[ACCEDER A LA BUILD COMPLETA](https://docs.google.com/spreadsheets/d/124RVREtD3Jftgh4BxyAnF9nuSCfbI9AHl3TFVzWc1eU/edit#gid=474409483)**'
            )

            .setFooter({ text: '📅 Última actualización 22/12/2022' });

        switch (interaction.values[0]) {
            case 'caerleon':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_caerleon],
                });
            case 'gank':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_gank],
                });
            case 'roaming':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_roaming1],
                });
            case 'magos':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_magos],
                });
            case 'avalonianas':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_avalonianas],
                });
            default:
                return;
        }
    },
};
