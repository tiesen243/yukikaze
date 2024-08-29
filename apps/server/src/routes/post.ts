import { t } from "elysia"

import { createElysia } from "../lib/elysia"

export const postRouter = createElysia({ prefix: "/post", name: "post.router", tags: ["post"] })
  .get(
    "/getAll",
    async ({ db }) => {
      const posts = await db.post.findMany()

      return posts
    },
    {
      response: t.Array(t.Object({ id: t.String(), title: t.String(), content: t.String() })),
    },
  )

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
