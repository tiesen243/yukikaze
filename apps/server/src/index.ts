import cors from "@elysiajs/cors"
import swagger from "@elysiajs/swagger"

import { createElysia } from "./lib/elysia"
import { postRouter } from "./routes/post"

const app = createElysia({ prefix: "/api" })
  .use(
    swagger({
      path: "/docs",
      documentation: { tags: [{ name: "post", description: "Post operations" }] },
    }),
  )
  .use(cors())
  .get("/health", () => {
    return { status: "ok" }
  })
  .use(postRouter)
  .compile()

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})

export type App = typeof app
