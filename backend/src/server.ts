import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

var schema = buildSchema(`
  type Response {
    message: String
    src: String
  }

  type Query {
    hello: String
    homePage: [Response]
  }
  type Mutation{
    registerEmail(email: String): String
  }
`);

interface Email {
  email: string
}

var rootValue = {
  hello() {
    return "Hello from the server";
  },
  registerEmail({ email }: Email) {
    console.log(email)
    return `Thanks ${email} from the server`
  },
  homePage() {
    return [
      { message: "PowerPointless quick sync nor we just need to put these last issues to bed.", src: "./pexels-andrea-piacquadio-935756.jpg" },
      { message: "Through the lens of for weaponize the data we need to button up our approach.", src: "./pexels-andrea-piacquadio-3799124.jpg" },
      { message: "If you're not hurting you're not winning ultimate measure of success", src: "./pexels-christina-morillo-1181690.jpg" },
      { message: "For rock Star / Ninja, or make it look like digital but cross pollination", src: "./pexels-daria-shevtsova-1560932.jpg" },
      { message: "pass the mayo, appeal to the client, sue the vice president.", src: "./pexels-fauxels-3184325.jpg" },
      { message: "Show pony product launch so crisp ppt but waste of resources we are running out of runway.", src: "./pexels-mentatdgt-1266193.jpg" },
      { message: "Low  hanging fruit.Not the long pole in my tent Bob called an all", src: "./pexels-rebrand-cities-1367276.jpg" },
      { message: "hands this afternoon run it up the flag pole accountable talk, and drink from the firehose.", src: "./pexels-anna-shvets-3987016.jpg" },
    ]
  }
};

app.use('/static', express.static('public'));

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

app.listen(7778);