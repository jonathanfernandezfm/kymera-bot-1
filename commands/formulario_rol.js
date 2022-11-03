const data = require('../data/db.json');
const fs = require('node:fs');
const path = require('path');

module.exports = {
	name: 'formulario_rol',
	description: 'Guarda el rol para formularios',
	execute: async (msg, args) => {
		const role_id = args[0].substring(args[0].indexOf('&') + 1, args[0].lastIndexOf('>'));
		data.rol_formulario = role_id;
		const dataPath = path.join(__dirname, '../data/db.json');
		fs.writeFileSync(dataPath, JSON.stringify(data));
		await msg.delete();
	},
};
