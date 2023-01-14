const { SlashCommandBuilder } = require('discord.js');
const request = require('request-promise');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('presidential')
		.setDescription('Replies with our beloved president'),
	async execute(interaction) {
		const imageUrl = 'https://nzfs.net/img/presidential.gif';
		const imageBuffer = await request({
			url: imageUrl,
			encoding: null,
		});
		//await interaction.reply({ files: [{ attachment: imageBuffer, name: 'tpdne.jpg' }] });
		await interaction.reply('Presidential');
		await interaction.channel.send({ files: [{ attachment: imageBuffer, name: 'presidential.gif' }] });
	},
};