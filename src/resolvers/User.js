const messages= async (parent,args,context,info)=>{
    const messages= await context.prisma.user({id:parent.id}).messages()
    return messages
}

module.exports={
    messages
}