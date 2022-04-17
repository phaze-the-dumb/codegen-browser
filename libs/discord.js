const djs = require('discord.js');
let logs = new djs.WebhookClient({ url: '' });

let genEmbed = (updateText, colour) => {
    let embed = new djs.MessageEmbed()
        .setTitle('Codegen Browser')
        .setDescription(updateText)
        .setColour(colour)

    logs.send({ embeds: [ embed ] });
}

module.exports = genEmbed