import { mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDir = path.resolve('src/assets/mag-covers')
const outputDir = path.resolve('src/assets/mag-covers-optimized')

await mkdir(outputDir, { recursive: true })

const files = await readdir(sourceDir)
const imageFiles = files.filter((file) => /\.(png|jpe?g|webp)$/i.test(file))

if (imageFiles.length === 0) {
  console.log('No source cover files found.')
  process.exit(0)
}

for (const file of imageFiles) {
  const inputPath = path.join(sourceDir, file)
  const nameWithoutExt = file.replace(/\.[^.]+$/, '')
  const outputPath = path.join(outputDir, `${nameWithoutExt}.webp`)

  await sharp(inputPath)
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(outputPath)

  console.log(`Optimized: ${file} -> ${path.basename(outputPath)}`)
}

console.log(`Optimized ${imageFiles.length} covers into ${outputDir}`)
