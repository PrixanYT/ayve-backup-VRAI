module.exports.run = async (client, message, args) => {
    const { voiceChannel } = message.member;
    if (!voiceChannel)
      return message.channel.send(
        "Vous devez être dans un salon vocal pour utiliser cette commande !"
      );
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)
      return message.channel.send("Il n'y a aucune musique en cours !");

    serverQueue.connection.dispatcher.end("La commande skip est utilisée !");
}

module.exports.help = {
    name: 'skip'
};