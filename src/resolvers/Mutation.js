const {notify} = require('../helpers/notification')
const user = async (parent,args,context,info)=>{
    console.log('user mutation')
    const user1 = await context.prisma.user({name:args.name})
    if(user1) return user1
    const user = await context.prisma.createUser({...args})
    const conversation = await context.prisma.createConversation({author:{connect:{id:user.id}}})
     return user
}

const message = async (parent,args,context,info)=>{
    console.log('message mutation')
    const message = await context.prisma.createMessage({...args,author:{connect:{id:args.author}},conversation:{connect:{id:args.conversation}}})
    notify({title:"nouveau message",bigText:message.content,message:message.content,subText:"Portfolio"})
    return message
}

module.exports={
    user,
    message
}