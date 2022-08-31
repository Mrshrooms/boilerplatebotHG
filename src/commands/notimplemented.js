const { MessageEmbed } = require('discord.js');
const content = require('../util/content');

module.exports = async (interaction) => {
    const { title, body } = content.notimplemented;
    const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(body)
    await interaction.reply({ embeds: [embed] });
}