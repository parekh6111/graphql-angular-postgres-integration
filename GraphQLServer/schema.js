const schema = `
scalar GQDate

type Registration {
    id: ID!
    firstName: String
    lastName: String
    dob: GQDate
    email: String
    password: String
    country: String
}

type Query {
    Registration(id: ID!): Registration
    Registrations(limit: Int): [Registration]
}

type Mutation {
    createRegistration (firstName: String,lastName: String, dob: GQDate, email: String, password: String, country: String): Registration

    updateRegistration (id: ID!, firstName: String,lastName: String, dob: GQDate, email: String, password: String, country: String): [Int]

    deleteRegistration(id: ID!): Int
}
`;

module.exports.Schema = schema;
