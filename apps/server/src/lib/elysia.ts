import type { ElysiaConfig } from "elysia"
import { db } from "@/lib/db"
import Elysia from "elysia"

export const createElysia = <P extends string, S extends boolean>(c?: ElysiaConfig<P, S>) =>
  new Elysia(c).derive({ as: "global" }, () => {
    return { db }
  })
