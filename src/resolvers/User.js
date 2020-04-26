const messages= async (parent,args,context,info)=>{
    const messages= await context.prisma.user({id:parent.id}).messages()
    return messages
}
const conversation= async (parent,args,context,info)=>{
    const conversation= await context.prisma.user({id:parent.id}).conversation()
    return conversation
}
module.exports={
    messages,
    conversation
}