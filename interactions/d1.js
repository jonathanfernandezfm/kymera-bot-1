module.exports = {
    name: 'd1',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        return interaction.reply({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n> Todos los miembros se deben respeto entre sí, sin importar antigüedad o rango. No se permite discriminación arbitraria o acoso por etnia, género, orientación sexual, condición socioeconómica, nacionalidad, edad, religión, tendencia política, habilidad en el juego, etcétera. La contravención grave o reiterada de esta regla es causal de expulsión inmediata.',
            ephemeral: true,
        });
    },
};
