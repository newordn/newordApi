
const user = async (parent,args,context,info)=>{
    console.log('user mutation')
    const user = await context.prisma.createUser({...args})
    return user
}

const message = async (parent,args,context,info)=>{
    console.log('message mutation')
    const message = await context.prisma.createMessage({...args,author:{connect:{id:args.author}}})
    return message
}

module.exports={
    user,
    message
}