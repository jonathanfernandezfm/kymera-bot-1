module.exports = {
    name: 'blacklist',
    description: 'Inicio',
    execute: async (msg) => {
        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });

        await msg.channel.send({
            content: 'https://i.imgur.com/75VM1cN.png',
        });

        await msg.channel.send({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n**LISTA DE PERSONAS CON PROHIBICIÓN DE SER RECLUTADO**:\n➥ _Última actualización 05/04/2023_',
        });

        await msg.channel.send({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n- Kraiks \n- QueenMirna \n- Kyotto \n- ZetaAmijodraco \n- Fartlek \n- Hugopensii \n- Brian2022\nㅤ    ',
        });

        await msg.delete();
    },
};
