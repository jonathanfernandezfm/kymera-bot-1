module.exports = {
    name: 'guia3',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        return interaction.reply({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n> Se usará el canal general de Albion Online para reclutar a jugadores españoles.',
            ephemeral: true,
        });
    },
};
