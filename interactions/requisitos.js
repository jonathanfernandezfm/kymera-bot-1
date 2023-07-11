module.exports = {
    name: 'requisitosrol',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        return interaction.reply({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n📝 __**Los requisitos para recibir el rol de Caerleon**__ ➠ <@&1020635840327729196>\n\n- Especialización de 2 armas principales de Caerleon al **75**\n```Mínimo 1200 IP para asistir a de Caerleon```\n*Es obligatorio tener este rol en discord para poder optar a regear en las actividades de Caerleon, de lo contrario no podrás solicitarlo sin él.*\n\n📝 __**Los requisitos para recibir el rol de Roaming**__ ➠ <@&1020636374589788190>\n\n- Especialización de 3 armas principales al **100**\n```Mínimo 1300 IP para asistir a un evento de Roaming```\n📝 __**Los requisitos para recibir el rol de Avalonianas**__ ➠ <@&1057997504655921183>\n\n- Haber leído la normativa y tener los set adecuados para esta actividad\n```Montura rápida, capa fortsterling, set de pelea y skip``` ',
            ephemeral: true,
        });
    },
};
