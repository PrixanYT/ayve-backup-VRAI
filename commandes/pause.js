

module.exports.run = async(client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return message.channel.send("⏸ La musique est en pause !");
    }
    return message.channel.send(
      "Il n'y a aucune musique qui est en train de jouer !"
    );
  }



module.exports.help = {
    name: 'pause'
}