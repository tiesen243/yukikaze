"use server"

import { revalidatePath, revalidateTag } from "next/cache"

// eslint-disable-next-line @typescript-eslint/require-await
export const revalidate = async ({ tag, path }: { tag?: string; path?: string }) => {
  if (tag) revalidateTag(tag)
  else if (path) revalidatePath(path)
  else return
}
