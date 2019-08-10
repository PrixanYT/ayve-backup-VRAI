const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let replies = ["Pile ! Tu à perdu", "Face ! Tu à gagné"]
    let res = Math.floor((Math.random() * replies.length));

    let askEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${message.author.username} Dit`, "Face")
    .addField("La réponsse était", replies[res]);
    message.channel.send(askEmbed)
    console.log(`Commande face exécuté par ${message.author.username}`)
}          


module.exports.help = {
    name: 'face'
};
