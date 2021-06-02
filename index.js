const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const { prefix, token} = require ("./config.json")
client.login(process.env.TOKEN);

client.on('ready', function(){
    console.log("Sa à bien démarée")
    client.user.setActivity(`Notre engagement , votre futur.`)
  });

client.on(`message` , msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong !');
    }
  });
  client.on(`message` , msg => {
    if (msg.content === 'ting') {
      msg.reply('Tong !');
    }
  });

  
  client.on("message", message => {
    if(message.author.bot) return;
    if(message.content == prefix + "stat"){
      message.channel.send("**" + message.author.username + "**" + " Qui a pour identifiant : " + message.author.id +" a posté un message ")
    }
  });

  client.on('message', message => {
    if (message.content === prefix +'ping'){  
      message.reply(`Pong🏓: ${Math.round(client.ws.ping)}ms`);
  }});

  //clear//

  client.on("message", message => {
    if(message.content === prefix + "purge") {
      message.channel.bulkDelete(100)
      .then(messages => console.log(`Chat purgé: ${messages.size} messages`))
      .catch(console.error);
   message.channel.send("Salons Purgé avec succés !🍂");
    }});

    client.on(`message` , msg => {
        if (msg.content === prefix +'aide') {
          msg.reply(`<:pingthink:795705509645778965> tu as besoins de nous ? Viens sur notre discord : https://discord.gg/zbDvcvUGQc 🍂`);
        }
      });

//Help//

client.on('message', message => {
  if (message.content === prefix +'help'){  
 
 
 
    let embedbeauf = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(":pushpin:Besoins d'aide ?")
    .setDescription("**:books: Pour une aide plus complète, référez-vous à la documentation. Faites ``&about`` pour en savoir plus sur Bunny.** ")
    .setImage()
    .setFooter("Ecolutip 🌳");

 
    message.channel.send(embedbeauf);
 
    message.delete();
}else {
    message.channel.send("") 
}});

//Cat//

const cats = [
  "https://media.giphy.com/media/q1MeAPDDMb43K/giphy.gif",
  "https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif",
  "https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif",
  "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif",
  "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",
  "https://media.giphy.com/media/l0MYNB04rBb51QNtC/giphy.gif",
  "https://media.giphy.com/media/lJNoBCvQYp7nq/giphy.gif",
  "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
  "https://media.giphy.com/media/MWSRkVoNaC30A/giphy.gif",
  "https://media.giphy.com/media/JRE3AvLsSRXg360F6l/giphy.gif",
  "https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif",
  "https://media.giphy.com/media/12PA1eI8FBqEBa/giphy.gif",
  "https://media.giphy.com/media/vhsNmFjuN4WDS/giphy.gif",
  "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif",
  "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
  "https://media.giphy.com/media/3xz2BHFXxvFDYwnA9W/giphy.gif",
  "https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif",
  "https://media.giphy.com/media/dBZnwwejzgf92kl7tD/giphy.gif",
  "https://media.giphy.com/media/c54YHGDH63jJC/source.gif",
  "https://media.giphy.com/media/3xz2BqfOtCLk3amW8o/giphy.gif",
  "https://media.giphy.com/media/10dU7AN7xsi1I4/giphy.gif",
  "https://media.giphy.com/media/11IYKJ5sN73twk/giphy.gif",
  "https://media.giphy.com/media/10FtRf9SBSqQlG/giphy.gif",
  "https://gph.is/2y8Ejot",
  "https://media.giphy.com/media/g4INsUG88obzw9wExT/giphy.gif",
  "https://media.giphy.com/media/1n8CNLP1VAPppXdEGP/giphy.gif",
  "https://media.giphy.com/media/4TvnBYzk0KACY3IiNq/giphy.gif",
  "https://media.giphy.com/media/321AhPYUBlQw2Ud0Xg/giphy.gif",
  "https://media.giphy.com/media/fqhzzhuUaY0GwXXskb/giphy.gif",
  "https://media.giphy.com/media/xFmAEViLmPiyT9QI2t/giphy.gif",
  "https://media.giphy.com/media/wTZNFrUlyXDy/giphy.gif",
  "https://media.giphy.com/media/S2xJMTe6YliGQ/giphy.gif",
  "https://media.giphy.com/media/tkM2AQZpPCDhC/giphy.gif",
  "https://gph.is/1Lmd2xR"
]

client.on('message', message => {
  if (message.content === prefix +'cat'){  
 
    if (message.channel.nsfw === false) {
 
    const cat = cats[Math.floor(Math.random() * cats.length)];
 
    let embedcat = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("🐱 Cat 🐱")
    .setImage(cat)
    .setFooter("Ecolutip 🌳");
 
    message.channel.send(embedcat);
 
    message.delete();
}else {
    message.channel.send("Tu ne peux malheureusement pas le mettre ici !'") 
}}});
