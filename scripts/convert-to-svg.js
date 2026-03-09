const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const LOGOS_DIR = path.join(__dirname, "..", "public", "logos");
const EXTENSIONS = [".jpg", ".jpeg", ".png"];

function getMimeType(ext) {
  const lower = ext.toLowerCase();
  if (lower === ".png") return "image/png";
  if (lower === ".jpg" || lower === ".jpeg") return "image/jpeg";
  return "image/png";
}

async function convertToSvg(filePath) {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const buffer = fs.readFileSync(filePath);
  const base64 = buffer.toString("base64");
  const mime = getMimeType(ext);

  const metadata = await sharp(buffer).metadata();
  const width = metadata.width || 100;
  const height = metadata.height || 100;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 ${width} ${height}"
     width="${width}"
     height="${height}">
  <image href="data:${mime};base64,${base64}"
         x="0" y="0"
         width="${width}"
         height="${height}"/>
</svg>
`;

  const outPath = path.join(LOGOS_DIR, `${baseName}.svg`);
  fs.writeFileSync(outPath, svg, "utf8");
  console.log(`  → ${baseName}.svg`);
}

async function main() {
  if (!fs.existsSync(LOGOS_DIR)) {
    console.error("Pasta não encontrada:", LOGOS_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(LOGOS_DIR);
  const images = files.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return EXTENSIONS.includes(ext);
  });

  console.log(`Encontrados ${images.length} arquivo(s) de imagem em public/logos/\n`);

  for (const file of images) {
    const filePath = path.join(LOGOS_DIR, file);
    try {
      await convertToSvg(filePath);
    } catch (err) {
      console.error(`Erro ao processar ${file}:`, err.message);
    }
  }

  console.log("\nConversão concluída.");
}

main();
