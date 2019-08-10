module.exports.run = async (client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)
      return message.channel.send("Il n'y a aucune musique en cours !");
    return message.channel.send(`
**Playlist:**
${serverQueue.songs.map(song => `${song.title}`).join("\n")}
___________
**Musique actuelle:** ${serverQueue.songs[0].title}
    `);
}

module.exports.help = {
    name: 'queue'
};