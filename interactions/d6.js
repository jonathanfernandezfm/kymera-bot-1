module.exports = {
    name: 'd6',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        return interaction.reply({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n> Todos los miembros del gremio tienen derecho a determinar su propio horario y manera de juego. No hay actividades obligatorias en el gremio ni habrán sanciones o reproches por no asistir a alguna actividad. Es deber de los miembros del gremio motivar a sus compañeros a participar en actividades comunes. Sin embargo, en ocasiones catalogadas como de prioridad máxima, tales como una defensa o conquista de un territorio, defensa de escondite propio o actividades de Caerleon, podrá medirse la asistencia para determinar el deber de compromiso del jugador.',
            ephemeral: true,
        });
    },
};
