const { gql } = require('apollo-server');

const typeDefs = gql`
  enum Type {
    normal
    fighting
    flying
    poison
    ground
    rock
    bug
    ghost
    steel
    fire
    water
    grass
    electric
    psychic
    ice
    dragon
    fairy
    unkown
    dark
  }
`;

module.exports = typeDefs;
