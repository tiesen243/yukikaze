import type { NextPage } from "next"

import { api } from "@yuki/lib"

const Page: NextPage = async () => {
  const { data } = await api.post.getAll.get()

  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
