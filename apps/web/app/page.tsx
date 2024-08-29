import type { NextPage } from "next"
import { CreatePost } from "@/components/create-post"

import { api } from "@yuki/lib"
import { Card, CardDescription, CardHeader, CardTitle } from "@yuki/ui/card"

const Page: NextPage = async () => {
  const { data } = await api.post.getAll.get({ fetch: { next: { tags: ["post"] } } })

  return (
    <main className="container my-4">
      <div className="mt-4 grid grid-cols-3 gap-4">
        <CreatePost />

        {data?.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.content}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  )
}

export default Page
