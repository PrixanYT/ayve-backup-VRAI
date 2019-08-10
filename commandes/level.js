const Discord = require("discord.js");
const exp = require('../exp.json')
module.exports.run = async (client, message, args) => {
    message.delete()
    if(!exp[message.author.id]) {
        exp[message.author.id] = {
        exp: 0,
        niveau: 1
    
        };
      }
    
      let cExp = exp[message.author.id].exp;
      let cNiv = exp[message.author.id].niveau;
      let nextLevelUp = cNiv * 100;
      let expNeededForLevelUp = nextLevelUp - cExp;

      let nivEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .addField("Niveau", cNiv, true)
        .addField("Exp", cExp, true)
        .setFooter(`${expNeededForLevelUp} d'exp requis pour le prochain niveau`)
    
    message.channel.send(nivEmbed);
    console.log(`Commande level exécuté par ${message.author.username}`)
}

module.exports.help = {
    name: 'level'
};