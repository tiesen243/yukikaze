import { PrismaClient } from "@yuki/db"

const createPrismaClient = () =>
  new PrismaClient({
    // eslint-disable-next-line
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

// eslint-disable-next-line
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db
