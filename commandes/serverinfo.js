const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete()
      var serverinfo = new Discord.RichEmbed()
      .setDescription("**Informations sur le serveur**")
      .setColor("#cb4b16")
      .addBlankField()
      .addField("Nom du serveur :", message.guild.name)
      .addField("Serveur crée le :", message.guild.createdAt)
      .addField("Serveur crée par :", message.guild.owner)
      .addField("Vous avez rejoint ce serveur le :", message.member.joinedAt)
      .addField("Nombre total de membre :", message.guild.memberCount )
      .addField("Rôles dans le serveur :", message.guild.roles.size)
      .addField("Channel dans le serveur :", "SOON")
      .addField("ID du serveur :", message.guild.id)
      .addBlankField()
      .setThumbnail(`${message.author.avatarURL}`)
      .setFooter("Prefix : . | Dev: Voltan#0212", message.author.avatarURL)
  message.channel.sendEmbed(serverinfo)
  console.log(`Commande serverinfo exécuté par ${message.author.username}`)
  }

  module.exports.help = {
    name: 'serverinfo'
};
