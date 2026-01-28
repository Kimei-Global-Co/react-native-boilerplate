import fs from 'node:fs'
import path from 'node:path'

const devDir = path.join(process.cwd(), 'src', 'features', '__DEV__')
const routesFile = path.join(
  process.cwd(),
  'src',
  'navigation',
  'config',
  'routes.ts'
)

if (fs.existsSync(devDir)) {
  fs.rmSync(devDir, { force: true, recursive: true })
  console.info('🧹 Removed __DEV__ folder')
}

if (fs.existsSync(routesFile)) {
  let content = fs.readFileSync(routesFile, 'utf8')

  content = content.replace(/^import .*__DEV__.*\n?/gm, '')

  content = content.replace(
    /export const devScreens\s*=\s*\{[\s\S]*?\}\n?/m,
    'export const devScreens = {}\n'
  )

  fs.writeFileSync(routesFile, content, 'utf8')
  console.info('🧹 Cleaned __DEV__ imports and devScreens in routes.ts')
}
