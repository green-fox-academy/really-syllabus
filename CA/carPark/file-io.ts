const fs = require('fs');

export function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(e.message);
    return null;
  }
}

export function writeToFile(fileName: string, content: string): void {
  if(fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content);
  } else {
    console.log('cant write to file');
  }
}

export function appendToFile(fileName: string, content: string): void {
  if(fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, content);
  } else {
    console.log('cant write to file');
  }
}
