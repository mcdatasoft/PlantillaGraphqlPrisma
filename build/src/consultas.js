"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/*
const allPosts: Post[] = await photon.posts.findMany({
    select: {
      title: true,
      published: true
    }
  })
  */
async function main() {
    const users = await prisma.clientes.findMany({
        select: {
            nombre: true,
            apellido: true
        }
    });
    console.log(JSON.stringify(users));
}
main();
//# sourceMappingURL=consultas.js.map