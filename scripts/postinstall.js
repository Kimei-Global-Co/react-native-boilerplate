// scripts/postinstall.js

import { execSync } from 'node:child_process'
import path from 'node:path'

const currentDir = path.basename(process.cwd())

if (currentDir !== 'template') {
  execSync('cd template && bun i --frozen-lockfile', {
    env: { ...process.env, SKIP_TEMPLATE_CLEANUP: '1' },
    stdio: 'inherit'
  })
  console.info('🍀 Good luck and happy coding! 🍀')
}
