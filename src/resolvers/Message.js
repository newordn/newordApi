const moment = require('moment')
const author= async (parent,args,context,info)=>{
    const author= await context.prisma.message({id:parent.id}).author()
    return author
}

const createdAt =  async (parent,args,context,info)=>{
    const date= await context.prisma.message({id:parent.id}).createdAt()
    return moment(date).fromNow()
}

module.exports={
    createdAt,
    author
}