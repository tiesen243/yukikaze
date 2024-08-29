import type { App } from "@yuki/server"
import { treaty } from "@elysiajs/eden"

export const api = treaty<App>("http://localhost:3001").api
