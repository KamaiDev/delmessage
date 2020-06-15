/* 

DDDDDDD        EEEEEEEEE  VVV             VVV
DDDDDDDDDD     EEEEEEEEE   VVV           VVV
DDDD    DDD    EEE          VVV         VVV
DDDD      DDD  EEEEEE        VVV       VVV
DDDD      DDD  EEEEEE         VVV     VVV
DDDD    DDD    EEE             VVV   VVV
DDDDDDDDD      EEEEEEEEE        VVV VVV
DDDDDD         EEEEEEEEE          VVV

🍷 Desenvolvido por: NotDev
💻 Script de apagar mensagens de canais/DMs com apenas 1 comando
🗳️ Sugestões de Scripts? Me add: NotDev'ᴮᴸ⁰#0666
👑 Quer o código aberto? Me faça uma proposta no meu privado ;)

💳 Também Vendo 💳
• Script de divulgação
• Apagar mensagens canais/privado
• Bot Anti Raid privado pro seu servidor
• Vendo entrada para a banca R$ 400,00 ( meme, Iroh. Casa comigo )

📚 Como Usar 📚

1 • Coloque a token da conta na pasta .env
2 • Configure o prefixo desejado
3 • Vá ao canal/DM desejada e use o comando ${prefixo}delmsg
[Nota] Evite usar muitas vezes ao dia para não dar rate limit e sua conta cair :/

*/

require('dotenv').config()

const fs      = require('fs')
const Enmap   = require('enmap')
const Discord = require('discord.js')

const bot     = new Discord.Client();

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, event.bind(null, bot));
    });
});

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("\nNão Foi encontrado nenhum comando")
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} carregado...`);
        bot.commands.set(props.help.name, props);
    })
})  

if(!process.env.TOKEN) process.env.TOKEN = "Nothing"
bot.login(process.env.TOKEN).catch(() => { console.log(`Token Inválida ::: ${process.env.TOKEN}`) })