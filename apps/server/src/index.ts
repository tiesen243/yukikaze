import { createElysia } from "@/lib/elysia"
import { postRouter } from "@/routes/post"
import swagger from "@elysiajs/swagger"

const app = createElysia()
  .use(
    swagger({
      path: "/docs",
      provider: "scalar",
      documentation: {
        info: {
          title: "Yukikaze API",
          version: "1.0.0",
          description: "Yukikaze API Documentation",
          contact: {
            name: "tiesen243",
            url: "https://tiesen.id.vn",
          },
        },
      },
    }),
  )
  .use(postRouter)

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})

export { app }
