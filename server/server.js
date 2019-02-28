const express = require('express')
const graphqlHTTP = require('express-graphql');
const {schema} = require('./schema')
const {root} = require('./schema')

const app = express()

app.use('/graphql',graphqlHTTP({
    schema,
    rootValue:root,
    graphiql:true
}))

app.listen(4000);