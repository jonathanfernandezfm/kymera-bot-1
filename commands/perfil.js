const { request } = require("undici");
const { AttachmentBuilder } = require("discord.js");
const Canvas = require("@napi-rs/canvas");

module.exports = {
	name: "perfil",
	description: "Obtiene información de un jugador.",
	execute: async (msg, args) => {
		console.log(msg, args);
		if (args.length === 0 || args.length > 1)
			return msg.reply({
				content: "Debes enviar un nombre de jugador. /perfil jugador",
				ephemeral: true,
			});

		const playerResult = await request(
			`https://gameinfo.albiononline.com/api/gameinfo/search?q=${args[0]}`
		);
		const playerBody = await playerResult.body.json();
		if (!playerBody.players[0]) {
			return msg.reply({
				content:
					"❌ Tu personaje no se encuentra en Albion. Si crees que es correcto, contacta con un reclutador o administrador",
				ephemeral: true,
			});
		}

		const playerId = playerBody.players[0].Id;
		const playerDataResult = await request(
			`https://gameinfo.albiononline.com/api/gameinfo/players/${playerId}`
		);
		const playerDataBody = await playerDataResult.body.json();

		const attachment = await createCanvas(playerDataBody);

		await msg.channel.send({
			// content: JSON.stringify(playerDataBody),
			files: [attachment],
		});
	},
};

async function createCanvas(playerDataBody) {
	// CANVAS
	const canvas = Canvas.createCanvas(505, 256);
	const context = canvas.getContext("2d");

	const background = await Canvas.loadImage("./assets/back_player.png");
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	const player_avatar = await Canvas.loadImage("./assets/avatar.png");
	context.drawImage(player_avatar, 39, 52, 129, 128);

	//TEXT
	context.font = "200 22px Arial";
	context.fontWeight = "thin";
	context.fillStyle = "#ffffff";
	context.fillText(playerDataBody.Name, 20, canvas.height - 24, 180);

	context.font = "200 14px Arial";

	context.fillText(
		playerDataBody.AllianceTag !== ""
			? playerDataBody.AllianceTag
			: "Sin alianza",
		canvas.width / 2 + 70,
		canvas.height / 2 + 15,
		180
	);
	context.fillText(
		playerDataBody.GuildName,
		canvas.width / 2 + 58,
		canvas.height / 2 + 47.5,
		180
	);
	context.fillText(
		playerDataBody.DeathFame + "",
		canvas.width / 2 + 89,
		canvas.height / 2 + 80.5,
		180
	);
	context.fillText(
		playerDataBody.FameRatio + "",
		canvas.width / 2 + 160,
		canvas.height / 2 + 113,
		180
	);

	const attachment = new AttachmentBuilder(await canvas.encode("png"), {
		name: "player_image.png",
	});

	return attachment;
}
