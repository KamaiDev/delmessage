module.exports = (bot, message) => {
  
if (message.author.bot) return;
if (message.author.id !== bot.user.id) return;

let prefix = 'PREFIXO AQUI';
if (!message.content.startsWith(prefix)) return;

    if (message.content.indexOf(prefix) !== 0) return;
   
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
  
    const cmd = bot.commands.get(command);
   
  
    if (!cmd) return;
   
  
    cmd.run(bot, message, args);
  };