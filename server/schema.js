var { buildSchema } = require('graphql');

const users = [
    {"id":"1","name":"test1"},
    {"id":"2","name":"test2"},
    {"id":"3","name":"test3"}
]

const schema = buildSchema(`
type Query {
    users: [User]
    User(id:String!): User
}
type Mutation {
    updateUser(id:String!,input:UserInput): User
}
input UserInput {
    name: String
}
type User{
    id: String
    name: String
}
`)

const root = {
    users:()=>{
        return users;
    },
    User:({id})=>{
        let answer = {};
        users.forEach((item)=>{
            if(item.id === id){
                answer = item;
            }
        })
        return answer;
    },
    updateUser:({id,input})=>{
        let answer = {};
        users.forEach((item)=>{
            if(item.id === id){
                item.name = input.name;
                answer = item;
            }
        })
        return answer ;
    }
}


module.exports = {schema,root}