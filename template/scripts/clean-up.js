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

// Logic to move template files from dotfiles directory to root
const dotfilesDir = path.join(process.cwd(), 'dotfiles')
const renameList = [
  { from: 'git-ignore', to: '.gitignore' },
  { from: 'biome-ignore', to: '.biomeignore' },
  { from: 'env-example', to: '.env.example' },
  { from: 'vs-code', to: '.vscode' },
  { from: 'husky-setup', to: '.husky' },
  { from: 'agents-setup', to: '.agents' },
  { from: 'codex-setup', to: '.codex' },
]

if (fs.existsSync(dotfilesDir)) {
  console.info('📦 Initializing dotfiles...')
  for (const { from, to } of renameList) {
    const fromPath = path.join(dotfilesDir, from)
    const toPath = path.join(process.cwd(), to)
    if (fs.existsSync(fromPath)) {
      try {
        if (fs.existsSync(toPath)) {
          fs.rmSync(toPath, { recursive: true, force: true })
        }
        fs.renameSync(fromPath, toPath)
        console.info(`  ✅ Created ${to}`)
      } catch (error) {
        console.error(`  ❌ Failed to create ${to}:`, error)
      }
    } else {
      console.warn(`  ⚠️  Source ${from} not found in dotfiles/`)
    }
  }
  // Clean up the dotfiles directory
  try {
    fs.rmSync(dotfilesDir, { recursive: true, force: true })
    console.info('🧹 Cleaned up template dotfiles directory')
  } catch (error) {
    console.error('  ❌ Failed to remove dotfiles directory:', error)
  }
}

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

    // Remove the clean-up script from postinstall
    if (packageJson.scripts?.postinstall) {
       packageJson.scripts.postinstall = packageJson.scripts.postinstall
        .replace('bun scripts/clean-up.js && ', '')
        .replace('bun scripts/clean-up.js', '')
        .trim();
       
       // If postinstall is empty or just "&&", remove it or clean it up? 
       // The original had "patch-package && bun intl:build".
       // We will prepend the cleanup.
       // So removing it specifically from string is safer.
       
       fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2), 'utf8');
       console.info('  ✅ Removed cleanup script from package.json postinstall')
    }

    // Delete the clean-up script file itself
    try {
      fs.unlinkSync(__filename)
      console.info('  ✅ Removed clean-up.js script file')
    } catch (error) {
      console.error('  ❌ Failed to remove clean-up.js script file:', error)
    }
  } catch (error) {
    console.error('  ❌ Failed to update README.md or package.json:', error)
  }
}
