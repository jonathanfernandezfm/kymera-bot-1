module.exports = {
    name: 'gank1',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        return interaction.reply({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n 🔪 __**¿EN QUÉ CONSISTE EL GANKING?**__\n➥ Es una actividad grupal recomendada de máximo 7 personas con builds específicas de gankeo y que consiste en perseguir y asaltar (en estático o montura) a otros jugadores.',
            ephemeral: true,
        });
    },
};
