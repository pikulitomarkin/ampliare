import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const INPUT_DIR = './public/imagens'
const OUTPUT_DIR = './public/imagens'

// Target dimensions per image name pattern
const getSizeForImage = (filename) => {
  const name = filename.toUpperCase()
  
  if (name.includes('ECOSSISTEMA') || name.includes('PRIMEIRAPAGINA')) {
    return { width: 1200, height: 480 }  // Ecossistema de Serviços cards
  }
  if (name.includes('NOSSOFOCO')) {
    return { width: 800, height: 480 }   // Nosso Foco cards
  }
  if (name.includes('AMPLIARE')) {
    return { width: 800, height: 400 }   // Soluções cards
  }
  if (name.includes('NOSSASATIVIDADES')) {
    return { width: 1200, height: 480 }  // Nossas Atividades
  }
  return { width: 1200, height: 480 }    // default
}

const removeWhiteBackground = async (inputPath, outputPath, targetSize) => {
  const filename = path.basename(inputPath)
  console.log(`Processing: ${filename}`)
  
  try {
    // Load image and get raw pixel data
    const image = sharp(inputPath)
    const { width, height, channels } = await image.metadata()
    
    // Get raw RGBA data
    const { data } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true })
    const pixelData = new Uint8Array(data)
    
    const THRESHOLD = 235  // pixels above this RGB value = white = transparent
    
    // Remove white pixels
    for (let i = 0; i < pixelData.length; i += 4) {
      const r = pixelData[i]
      const g = pixelData[i + 1]
      const b = pixelData[i + 2]
      
      if (r > THRESHOLD && g > THRESHOLD && b > THRESHOLD) {
        pixelData[i + 3] = 0  // set alpha to 0 (transparent)
      }
    }
    
    // Determine crop: portrait to landscape
    const targetAspect = targetSize.width / targetSize.height
    const sourceAspect = width / height
    
    let cropX = 0, cropY = 0, cropW = width, cropH = height
    
    if (sourceAspect < targetAspect) {
      // Source is taller (portrait) — crop height
      cropH = Math.round(width / targetAspect)
      cropY = Math.round(height * 0.05) // start 5% from top
      cropY = Math.min(cropY, height - cropH)
    } else {
      // Source is wider — crop width
      cropW = Math.round(height * targetAspect)
      cropX = Math.round((width - cropW) / 2)
    }
    
    // Apply: remove background + crop + resize + save as PNG
    const outputFile = outputPath.replace(/\.(jpg|jpeg)$/i, '.png')
    
    await sharp(Buffer.from(pixelData), {
      raw: { width, height, channels: 4 }
    })
      .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
      .resize(targetSize.width, targetSize.height, {
        fit: 'cover',
        position: 'center'
      })
      .png({ compressionLevel: 8, quality: 90 })
      .toFile(outputFile)
    
    console.log(`  ✓ Saved: ${path.basename(outputFile)} (${targetSize.width}x${targetSize.height})`)
    
    // Remove original JPG if output is PNG (different name)
    if (outputFile !== inputPath) {
      fs.unlinkSync(inputPath)
      console.log(`  ✓ Removed original: ${filename}`)
    }
  } catch (err) {
    console.error(`  ✗ Error on ${filename}:`, err.message)
  }
}

// Main
const files = fs.readdirSync(INPUT_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f))
console.log(`Found ${files.length} images to process\n`)

for (const file of files) {
  const inputPath = path.join(INPUT_DIR, file)
  const outputPath = path.join(OUTPUT_DIR, file)
  const targetSize = getSizeForImage(file)
  await removeWhiteBackground(inputPath, outputPath, targetSize)
}

console.log('\n✅ All images processed!')
console.log('⚠️  Update src extensions from .jpg to .png in your components!')
