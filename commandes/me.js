const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    let info = new Discord.RichEmbed()

    .setAuthor(`Voici les infos de ${message.author.username}`)
    .addField('Pseudo', ` ${message.author.username}`)
    .addField(`ID :`, ` ${message.author.id}`)
    .addField(`Status :`, ` ${message.author.presence.game}`)
    .setThumbnail(`${message.author.avatarURL}`)
    .setColor("RANDOM")
    message.channel.send(info)
console.log(`Commande me exécuté par ${message.author.username}`)

}

module.exports.help = {
    name: 'me'
};
