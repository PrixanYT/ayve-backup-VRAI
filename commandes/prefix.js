const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande ! :x:**")
    if (!args[0] || args[0 == "help"]) return message.reply("**Syntaxe: .prefix <prefix>** :x:")

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

    prefixes[message.guild.id] = {
        prefixes: args[0]
    }
    message.channel.send("**Prefix mise a jour !**")
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), err => {
        if (err) console.log(err)
    })
}

module.exports.help = {
  name: "prefix"
}