const { SlashCommandBuilder } = require('discord.js');
const request = require('request-promise');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('imperial')
		.setDescription('Replies with an imperial gif'),
	async execute(interaction) {
		const imageUrl = 'https://nzfs.net/img/imperial.gif';
		const imageBuffer = await request({
			url: imageUrl,
			encoding: null,
		});
		//await interaction.reply({ files: [{ attachment: imageBuffer, name: 'tpdne.jpg' }] });
		await interaction.reply('Imperial');
		await interaction.channel.send({ files: [{ attachment: imageBuffer, name: 'imperial.gif' }] });
	},
};