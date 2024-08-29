"use client"

import { revalidate } from "@/lib/actions"
import { z } from "zod"

import { api } from "@yuki/lib"
import { Button } from "@yuki/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
  zodResolver,
} from "@yuki/ui/form"
import { Input } from "@yuki/ui/input"

export const CreatePost: React.FC = () => {
  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) })

  const handleSubmit = form.handleSubmit(async (values) => {
    await api.post.create.post(values)
    await revalidate({ tag: "post" })
  })

  const { isSubmitting } = form.formState

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          disabled={isSubmitting}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="What's on your mind?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          disabled={isSubmitting}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Input placeholder="What's on your mind?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={isSubmitting}>
          Create
        </Button>
      </form>
    </Form>
  )
}

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
})
