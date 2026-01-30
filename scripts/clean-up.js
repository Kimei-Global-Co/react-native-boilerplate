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
const rootScenesFile = path.join(
  process.cwd(),
  'src',
  'navigation',
  'scenes',
  'root-scenes.tsx'
)
const readmeFile = path.join(process.cwd(), 'README.md')
const packageJsonFile = path.join(process.cwd(), 'package.json')

if (fs.existsSync(devDir)) {
  fs.rmSync(devDir, { force: true, recursive: true })
  console.info('🧹 Removed __DEV__ folder')
} else {
  console.info('⚠️  __DEV__ folder not found')
}

if (fs.existsSync(routesFile)) {
  let content = fs.readFileSync(routesFile, 'utf8')

  content = content.replaceAll(/^import .*__DEV__.*\n?/gm, '')

  content = content.replace(
    /export const devScreens\s*=\s*\{[\s\S]*?\}\n?/m,
    'export const devScreens = {}\n'
  )

  fs.writeFileSync(routesFile, content, 'utf8')
  console.info('🧹 Cleaned __DEV__ imports and devScreens in routes.ts')
} else {
  console.info('⚠️ routes.ts not found')
}

if (fs.existsSync(rootScenesFile)) {
  let content = fs.readFileSync(rootScenesFile, 'utf8')

  // Remove the specific initialRouteName condition, including the explanatory comment
  content = content.replaceAll(
    /\s*\/\*\*[\s\S]*?\*\/\s*\n\s*\/\/@ts-expect-error\s*\n\s*initialRouteName=\{__DEV__ \? 'DevMenu' : (ROUTES\.\w+)\}/g,
    '\n      initialRouteName={$1}'
  )

  fs.writeFileSync(rootScenesFile, content, 'utf8')
  console.info('  ✅ Updated initialRouteName in root-scenes.tsx')
} else {
  console.info('  ⚠️  root-scenes.tsx not found')
}

if (fs.existsSync(readmeFile) && fs.existsSync(packageJsonFile)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'))
    const projectName = packageJson.name

    if (projectName) {
      // Convert kebab-case or snake_case to PascalCase
      const pascalCaseName = projectName
        .replaceAll(/(-\w)/g, (m) => m[1].toUpperCase()) // kebab-case to camelCase
        .replaceAll(/(_\w)/g, (m) => m[1].toUpperCase()) // snake_case to camelCase
        .replace(/^\w/, (c) => c.toUpperCase()) // First char to upper

      let content = fs.readFileSync(readmeFile, 'utf8')
      if (content.includes('{{APP_NAME}}')) {
        content = content.replaceAll('{{APP_NAME}}', pascalCaseName)
        fs.writeFileSync(readmeFile, content, 'utf8')
        console.info(
          `  ✅ Updated README.md with project name: ${pascalCaseName}`
        )
      } else {
        console.info('  ℹ️  {{APP_NAME}} placeholder not found in README.md')
      }
    }
  } catch (error) {
    console.error('  ❌ Failed to update README.md:', error)
  }
}
