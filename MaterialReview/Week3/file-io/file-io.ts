export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(e.message);
    return null;
  }
}

function writeToFile(fileName: string, data: string): void {
  fs.appendFileSync(fileName, data);
}

function countChar(char: string): number {
  const fileContent: string = readFromFile('file.txt');
  let count: number = 0;
  if (fileContent !== null) {
    fileContent.split('\r\n').forEach(e => {
      e.split('').forEach(elem => {
        if (elem === char) {
          count += 1;
        }
      })
    })
    writeToFile('file.txt', 'really');
    return count;
  }
}

// writeToFile('file.txt', 'really');

console.log(countChar('a'));