import type { NextPage } from "next"

import { api } from "@yuki/lib"

const Page: NextPage = async () => {
  const { data } = (await api.post.getAll.get()) as {
    data: {
      posts: {
        id: string
        title: string
        content: string
      }[]
    }
  }

  return (
    <div className="container my-4">
      <h1 className="text-3xl font-bold">Posts</h1>

      <ul className="mt-4 grid grid-cols-3 gap-4">
        {data.posts.map((post) => (
          <li key={post.id} className="rounded-lg border p-6">
            <h2 className="text-xl font-medium">{post.title}</h2>
            <p className="text-sm">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
