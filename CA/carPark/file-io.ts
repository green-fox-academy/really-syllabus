const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(e.message);
    return null;
  }
}

function writeToFile(fileName: string, content: string): void {
  if(fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content);
  } else {
    console.log('cant write to file');
  }
}

writeToFile('README.md', 'kiskutya');
console.log(readFromFile('cars.csv'));