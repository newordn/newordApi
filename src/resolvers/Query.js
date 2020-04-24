const info = ()=> `Welcome on Neword'Api`
const users = async (parent,args,context,info)=>{
    console.log('users query')
    const users = await context.prisma.users({orderBy:'id_DESC'})
    return users
}
const messagesByUser = async (parent,args,context,info)=>{
    console.log('message user query')
    const messages = await context.prisma.user({id:args.userId}).messages({orderBy:'id_DESC'})
    return messages
}
module.exports={
    info,
    users,
    messagesByUser
}