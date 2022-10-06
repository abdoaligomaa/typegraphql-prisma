// console.log('how are you ')
import "reflect-metadata";

import {ApolloServer} from 'apollo-server'
import {buildSchema} from "type-graphql"
import { resolvers } from "@generated/type-graphql";

const buildschema=async ()=>{
    const schema = buildSchema({ resolvers });
    return schema
}

const app=async()=>{
    const schema=await buildschema()
    const server=new ApolloServer({schema})
    server.listen(8080,()=>console.log('server is running at port 8080'))
}
app()
