const { GraphQLScalarType } = require("graphql");

const GQDate = new GraphQLScalarType({
  name: "GQDate",
  description: "Date type",
  parseValue(value) {
    return value;
  },
  serialize(value) {
    return value;
  },
  parseLiteral(ast) {
    return new Date(ast.value);
  }
});

const resolvers = {
  Query: {
    Registrations: (parent, args, { models }) => models.Registration.findAll(),
    Registration: (parent, { id }, { models }) =>
      models.Registration.findOne({
        where: {
          id,
        }
      })
  },

  Mutation: {
    createRegistration: (parent, args, { models }) => models.Registration.create(args),
    deleteRegistration: (parent, args, { models }) => models.Registration.destroy({ where: args }),
    updateRegistration: (parent, args, { models }) => {
      return models.Registration.update({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        dob: args.dob,
        country: args.country,
        password: args.password
      }, {
        where: {
          id: args.id
        }
      })
    }
  },
  GQDate
}

module.exports.Resolvers = resolvers;