const Discord = require('discord.js');
const authToken = 'NTQ4MDcyNTU1MDU2MjAxNzU4.D1AGZg.V9556Et_wCXoLzZKMSf4qPZzbnc';

const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', function (message) {
  switch (message.content.toLocaleUpperCase()) {
    case 'GAMETIME': {
      console.log(message.channel.guild.roles.get('548106236726607873'));
    }
  }
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

bot.login(authToken);
