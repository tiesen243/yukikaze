import { createElysia } from "@/lib/elysia"
import { t } from "elysia"

export const postRouter = createElysia({ prefix: "/post", name: "post.router" })
  .get("/getAll", async ({ db }) => {
    const posts = await db.post.findMany()
    return {
      message: "Get all posts",
      posts,
    }
  })

  .post(
    "/create",
    async ({ db, body }) => {
      const post = await db.post.create({
        data: body,
      })
      return {
        message: "Create a post",
        post,
      }
    },
    {
      body: t.Object({
        title: t.String(),
        content: t.String(),
      }),
    },
  )
