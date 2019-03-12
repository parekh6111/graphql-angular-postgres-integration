const express = require("express");
const cors = require("cors");
const { makeExecutableSchema } = require("graphql-tools");
const bodyParser = require("body-parser");
const { graphqlExpress } = require('graphql-server-express');

const typeDefs = require("./schema").Schema;
const resolvers = require("./resolvers").Resolvers;
const models = require("./models");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

var app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

models.sequelize.sync().then(() => app.listen(4000));