import type { Config } from "tailwindcss"

import baseConfig from "@yuki/tailwind-config/shared"

const config: Config = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "../../packages/**/*.{ts,tsx}"],
  presets: [baseConfig],
}
export default config
