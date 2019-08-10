const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const config = require("./config.json");
const Enmap = require("enmap")
const fs = require("fs");
const exp = require("./exp.json")
client.queue = new Map()

client.config = config;

client.on('message', async message => {
  let addExp = Math.floor(Math.random() * 5) + 1;

  if(!exp[message.author.id]) {
    exp[message.author.id] = {
    exp: 0,
    niveau: 1

    };
  }

  let currentExp = exp[message.author.id].exp;
  let currentNiv = exp[message.author.id].niveau;
  let nextLevel = currentNiv * 100;
  exp[message.author.id].exp = currentExp + addExp;

  if(nextLevel <= currentExp) {
    exp[message.author.id].niveau += 1;
    message.reply(`**Bravo, tu est passé niveau ${currentNiv + 1} !**`)
    .then(message => {
      message.delete(5000);
    });
  }
  fs.writeFile('./exp.json', JSON.stringify(exp), err => {
    if (err) console.log(err);
  });


})
client.on('message', async message => {
let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if (!prefixes[message.guild.id]) {
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      }
    }
    let prefix = prefixes[message.guild.id].prefixes

    let messageArray = message.content.split(" ")
    let command = messageArray[0]
    let args = messageArray.slice(1)

      let commandFile = client.commands.get(command.slice(prefix.lenght))
      if (commandFile) commandFile.run(client, message, args)
     
  })

fs.readdir("./events", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commandes", (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const props = require(`./commandes/${file}`);
        const commandName = file.split(".")[0];
        console.log(`Lancement de la commande ${commandName}`)
        client.commands.set(commandName, props);
    });
});

client.login("NTgxNTQ4MjAzMzE3NjU3NjEw.XUMoHA.AoPW5hL0Qd0ZEf2yWP8ZD-FJ_Ik");
