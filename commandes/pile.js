const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let replies = ["Face ! Tu a perdu", "Pile ! Tu a gagné"]
    let res = Math.floor((Math.random() * replies.length));

    let askEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${message.author.username} Dit`, "Pile")
    .addField("La réponsse était", replies[res]);
    message.channel.send(askEmbed)
    console.log(`Commande pile exécuté par ${message.author.username}`)
}          


module.exports.help = {
    name: 'pile'
};
