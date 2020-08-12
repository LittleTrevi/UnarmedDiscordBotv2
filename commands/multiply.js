module.exports = {
    name: 'multiply',
    description: "this is a multiply command!",
    execute(message, args){
        var args = message.content.split(' ')
        var total = args[1];
        
        for(let i = 0; i < args.length - 2; i++) {
        
        
            total = total * parseInt(args[i + 2])
        }
        message.channel.send(total);
    }
}
