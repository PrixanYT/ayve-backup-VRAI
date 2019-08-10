const ytdl = require("ytdl-core");
module.exports.run = async (client, message, args) => {
 if (!message.member.voiceChannel) return message.channel.send("**Connectez vous à un salon vocal !** :x:")
 if (message.guild.me.voiceChannel) return message.channel.send("**Le bot est déjà connecté à un salon vocal !** :x:")
 if(!args[0]) return message.channel.send("**Présicer un lien YouTube ! :x:**")

 const info = await ytdl.getInfo(args[0]);
 const connection = await message.member.voiceChannel.join();
 const dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly'})
);
 const disconnect = await dispatcher.on("end", () => {
 message.reply(`**La musique ${info.title} est fini, je me suis déconnecté du vocal ! :stop_button: **`)
 message.guild.me.voiceChannel.leave()})

 message.reply(`**La musique ${info.title} commence ! :arrow_forward: **`);
console.log(`Commande play exécuté par ${message.author.username}`)
};



module.exports.help = {
    name: 'play'
};