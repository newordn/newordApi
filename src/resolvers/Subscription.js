const newMessageSubscribe = (parent,args,context,info)=>context.prisma.$subscribe.message(
    {
        mutation_in: ['CREATED']
    
    }).node()

const newMessage = {
    subscribe: newMessageSubscribe,
    resolve: payload=>payload
}
module.exports={
    newMessage
}