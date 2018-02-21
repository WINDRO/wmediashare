const Discord = require ('discord.js')
const bot = new Discord.Client();
const prefix = "/";
var guild = bot.guilds.get("409076115374866433")

bot.login(process.env.TOKEN);


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "W Media Share 📎", type: 0 } });
    console.log("Bot Ready !");
});

bot.on('guildMemberAdd', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("409076115374866433")
    var add = bot.channels.get("409079636807516171")
    if(guild1 == guild.id) {
      add.send(`Salut ${member}, bienvenue sur le serveur **${guild.name}**! Si tu invites 10 membres sur ce discord avec ta propre invitation tu recevra automatiquemen un grade V.I.P !`);
    } else {
      return
    }
    });

bot.on('guildMemberRemove', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("409076115374866433")
    var add = bot.channels.get("409079636807516171")
    if(guild1 == guild.id) {
      add.send(`**${member.user.username}** a quitté le serveur **${guild.name}**. Bye bye... !`);
    } else {
      return
    }
    });

bot.on('guildMemberAdd', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("409076115374866433")
    var add = bot.channels.get("409079636807516171")
    if(guild1 == guild.id) {
      member.sendMessage(`**Salut ${member}, bienvenue sur le serveur ${guild.name} !** \n\nDans ce serveur tu pourra partager tout type de publicité ! \nMais pas que, tu pourra aussi découvrir d'autres serveurs, des chaînes YouTube... Et même apprendre des méthodes pour agrandir ton audience.\n\nPense à lire le règlement et les informations. \n\n*Voici le lien du serveur pour inviter tes amis :* https://discord.gg/YSqEt65\n\nA bientôt.:wink: \n\nVoici le serveur principal de plus de 1300 membres : https://discord.gg/jkS47tE \n\nN'hésite pas à rejoindre le serveur de sauvegarde de la communauté : https://discord.gg/NfvFpNx`);
    } else {
      return
    }
    });


