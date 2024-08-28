import baseConfig, { restrictEnvAccess } from "@yuki/eslint-config/base"

/** @type {import('typescript-eslint').Config} */
export default [...baseConfig, ...restrictEnvAccess]
