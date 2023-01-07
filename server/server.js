const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readFileSync, writeFileSync } = require("fs");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(
  cors({
    origin: "*",
    preflightContinue: false,
    allowedHeaders: "*",
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.static("public"));

app.use(bodyParser.json());

const scheme = buildSchema(`
  type Query{
    getTodos:GetTodo!
  }
  type Mutation{
    addTodo(value:String):GetTodo!
    completeTodo(id:ID!,value:String):GetTodo!
  }

  type GetTodo {
    completed:[Todo]!
    inProgress:[Todo]!
  }

  type Todo{
    value:String!
    id:ID!
  }


`);

const readDb = () => {
  const data = readFileSync(__dirname + "/db.json", { encoding: "utf-8" });
  return JSON.parse(data);
};

const root = {
  addTodo({ value }) {
    const data = readDb();
    const newId = data.lastId + 1;
    data.inProgress.push({ value, id: newId });
    data.lastId = newId;
    writeFileSync(__dirname + "/db.json", JSON.stringify(data, null, 4));
    return data;
  },
  getTodos() {
    const data = readDb();
    delete data.lastId;
    return data;
  },
  completeTodo({ id, value }) {
    console.log("this is", id, value);
    const data = readDb();
    data.inProgress = data.inProgress.filter((to) => to.id != id);
    data.completed.push({ value, id });
    writeFileSync(__dirname + "/db.json", JSON.stringify(data, null, 4));
    return data;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: scheme,
    rootValue: root,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../public/index.html");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    ` server is listening on localhost:${port} \n graphql listen on /graphql`
  );
});
