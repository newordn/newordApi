const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Message = require('./resolvers/Message')
const {prisma} = require('./generated/prisma-client')
const {typeDefs} = require('./schema.graphql')
const {makeExecutableSchema} = require('graphql-tools')
const {GraphQLServer} = require('graphql-yoga')

const resolvers = {
    Query,
    Mutation,
    User,
    Message  
}
const schema = makeExecutableSchema({typeDefs,resolvers})
const server = new GraphQLServer({
    schema,
    context: request=>({...request,prisma})
})
server.start(()=>console.log("Neword Api is running on port http://localhost:4000"))