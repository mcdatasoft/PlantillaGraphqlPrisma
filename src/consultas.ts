import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
    })
    console.log(JSON.stringify(users))
  }
  
  main()