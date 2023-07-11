module.exports = {
    name: 'ava',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        return interaction.reply({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n 🌟 __**¿EN QUÉ CONSISTE LA ACTIVIDAD AVALONIANA?**__\n➥ Es una actividad grupal recomendada para hacer fama y conseguir un bufo de aumento de esta. Tiene mayor dificultad y requiere un set específico de mazmorras avalonianas y un set de skip. Obligatorio leer las normas antes de asistir a esta actividad',
            ephemeral: true,
        });
    },
};
