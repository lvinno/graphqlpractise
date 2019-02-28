var { buildSchema } = require('graphql');

const users = [
    {"id":"1","name":"test1"},
    {"id":"2","name":"test2"},
    {"id":"3","name":"test3"}
]

const schema = buildSchema(`
type Query {
    users: [User]
    User(id:String): User
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
    User:(args)=>{
        let a = {};
        users.forEach((item)=>{
            if(item.id === args.id){
                a = item;
            }
        })
        return a ;
    }
}


module.exports = {schema,root}