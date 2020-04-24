const messages= async (parent,args,context,info)=>{
    const messages= await context.prisma.user({id:parent.id}).messages({orderBy:'id_DESC'})
    return messages
}

module.exports={
    messages
}