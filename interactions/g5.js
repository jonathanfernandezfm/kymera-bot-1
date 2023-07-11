module.exports = {
    name: 'guia5',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        return interaction.reply({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n> Aceptar solicitudes que cumplan los requisitos.',
            ephemeral: true,
        });
    },
};
