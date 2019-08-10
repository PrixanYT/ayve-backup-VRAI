module.exports = client => {
    console.log("Ayve est allumé avec succès !")
        setInterval(async () => {
      const statuslist = [
        `Prefix .`,
        `Version du bot: 2.1`,
        `${client.guilds.size} serveur`,
        `${client.users.size} membres`,
        `By Voltan#0212`,
        `Mise a jour le 8 août à 00:01`,
        `Nouveau: Commande NSFW`
      ];
      const random = Math.floor(Math.random() * statuslist.length);
      
      try {
        await client.user.setPresence({
            game: {
            name: `${statuslist[random]}`
          },
          status: "dnd"
        });
      } catch (error) {
        console.error(error);
      }
      }, 10000);
}
