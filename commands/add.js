module.exports = {
    name: 'add',
    description: "this is a add command!",
    execute(message, args){
        var args = ['add', '1', '2', '3', '4']
        var args = message.content.split(' ')
        var total = 0;
        
        for(let i = 0; i < args.length - 1; i++) {
        
        
            total = total + parseInt(args[i + 1])
        }
        message.channel.send(total);
    }
}
