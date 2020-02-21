/*
console.log("Try npm run check/fix!");

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return ;
  }
  console.log(withThis);
  console.log(andThat);
}
*/

/*
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Saludos, " + person.firstName + " " + person.lastName;
}

let user = new Student("Catherine", "H.", "de Cuadros");

console.log(greeter(user));
*/
/*
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
  async function main() {
  
    const users = await prisma.clientes.findMany({
        select: {
            nombre: true,
            apellido: true
          }
    })
    console.log(users)
  }
  
  main()
*/

/*
type Query {
  feed: [Post!]!
  drafts: [Post!]!
  post(id: ID!): Post
}

type Mutation {
  createDraft(title: String!, content: String): Post
  deletePost(id: ID!): Post
  publish(id: ID!): Post
}

type Post {
  id: ID!
  published: Boolean!
  title: String!
  content: String!
}
*/
//links importantes:
//https://www.howtographql.com/graphql-js/0-introduction/
//https://www.prisma.io/
//https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a
//https://github.com/prisma/prisma2/blob/master/docs/getting-started.md
//https://github.com/prisma/prisma-client-js
//https://github.com/prisma/prisma2/blob/master/docs/introspection.md
//https://github.com/prisma/prisma2/blob/master/docs/data-modeling.md
//https://photonjs.prisma.io/
//https://lift.prisma.io/
//https://oss.prisma.io/
//https://www.howtographql.com/basics/0-introduction/
//https://devcenter.heroku.com/categories/nodejs-support
//https://github.com/prisma-labs/graphql-yoga
//front end  ZEUS PARA frontend
//https://dev.to/graphqleditor/top-3-graphql-code-generators-1gnj
//https://blog.kaleidos.net/Monorepos-con-Lerna/
const { GraphQLServer } = require('graphql-yoga')

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// 1
const typeDefs = `
type Query {
  info: String!
  listado: [Cliente!]!
}

type Cliente {
  id: ID!
  apellido: String!
  nombre:   String!
}
`
// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    listado: (parent : any, args : any, context : any ) => {
      return context.prisma.clientes.findMany({
        select: {
          id: true,  
          nombre: true,
          apellido: true
          }
    })
    },
  }
}

// 3

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
