const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
message.delete()
    var help = new Discord.RichEmbed()
              .setTitle("**Page d'aide**")
              .setColor("RANDOM")
	          .addField("🔓 Modération","``ban, kick, mute, tempmute, unmute, clear, poll, addrole, removerole, annonce``")
              .addField("📱 Utile","``info, serverinfo, ping, me, sugg, invite``")
              .addField("🎲 Fun","``avatar, octogone, level, 8ball, say, sayembed, pile, face, love``")
              .addField("🐒 Animale","``dog, cat``")
              .addField("📸 Image", "``kitsune, hug, pat, waifu, cry, kiss, slap, foxg, emoji``")
              .addField("🔞 NSFW", "``nekolewd, neko, nude, ero, boobs, pussy, hentaigif, holoero, nsfwlogo, anal, suckm, nudem, yuri, nsfwfoxg``")
              .addField("🎵 Musique","``play, stop``")
              .setFooter(`Demandé par ${message.author.username}`, message.author.avatarURL)
          message.channel.sendEmbed(help)
          console.log(`Commande help exécuté par ${message.author.username}`)
    
}          


module.exports.help = {
    name: 'help'
};
