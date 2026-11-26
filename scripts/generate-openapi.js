const swaggerConfig = require("../src/config/swagger");

const fs = require("node:fs");
const path = require("node:path");

const destinationPath = path.join(__dirname, "../docs/openapi.json").replace(/\\/g, "/");

fs.writeFileSync(destinationPath, JSON.stringify(swaggerConfig, null, 2) + "\n",);

console.log(`Openapi gerado em ${path.relative(process.cwd(), destinationPath)}`);