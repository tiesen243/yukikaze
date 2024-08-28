import { treaty } from "@elysiajs/eden"

import { app } from "@yuki/server"

export const api = treaty<typeof app>("http://localhost:3001")
