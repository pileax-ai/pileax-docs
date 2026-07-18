const fs = require('fs')
const path = require('path')

// Define the file paths for i18n JSON files
const i18nDir = path.resolve(__dirname, '.')
const files = ['en.json', 'zh.json']

function sortJsonKeys() {
  files.forEach(file => {
    const filePath = path.join(i18nDir, file)

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`)
      return
    }

    // Read and parse the original JSON
    const rawData = fs.readFileSync(filePath, 'utf-8')
    const obj = JSON.parse(rawData)

    // Sort keys alphabetically
    const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b))

    // Reconstruct the object with sorted keys
    const sortedObj = {}
    sortedKeys.forEach(key => {
      sortedObj[key] = obj[key]
    })

    // Write back to the file with 2-space indentation
    // Added a trailing newline to follow standard POSIX file guidelines
    fs.writeFileSync(filePath, JSON.stringify(sortedObj, null, 2) + '\n', 'utf-8')

    console.log(`Successfully sorted keys for: ${file}`)
  })
}

// Execute the sorting process
sortJsonKeys()