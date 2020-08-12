var Discord = require('discord.js')
var client = new Discord.Client()

const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Unarmed is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'add'){
    client.commands.get('add').execute(message, args)
    } else if (command === 'multiply'){
        client.commands.get('multiply').execute(message, args)
    } else if (command === 'subtract'){
        client.commands.get('subtract').execute(message, args)
    } else if (command === 'divide'){
        client.commands.get('divide').execute(message, args)
    }

});    







client.login(process.env.BOT_TOKEN);


