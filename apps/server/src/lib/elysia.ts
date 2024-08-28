import type { ElysiaConfig } from "elysia"
import { db } from "@/lib/db"
import Elysia from "elysia"

const createContext = new Elysia()
  .derive(() => {
    return { db }
  })
  .as("plugin")

export const createElysia = <P extends string, S extends boolean>(c?: ElysiaConfig<P, S>) =>
  new Elysia(c).use(createContext)
