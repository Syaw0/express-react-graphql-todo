const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readFileSync } = require("fs");
const app = express();

app.use(
  cors({
    origin: "*",
    preflightContinue: false,
    allowedHeaders: "*",
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(bodyParser.json());

const scheme = buildSchema(`


`);

const root = {};

app.use("/", (req, res, next) => {
  console.log(req.body, req.method);
  next();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: scheme,
    rootValue: root,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("data");
});

app.listen(3000, () => {
  console.log("listen on 3000");
});
