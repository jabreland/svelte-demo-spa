import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {buildSchema} from 'graphql';

const app = express();

app.get("/", (req, res) =>{
  res.send("Hey")
})

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var rootValue = {
  hello(){
    console.log("Here");
    return "Hello World";
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

app.listen(7778);