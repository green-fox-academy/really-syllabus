function divideBy(a: number, b: number): number {
  if (b === 0) {
    throw new TypeError('Can\'t divide by zero');
  }
  return a / b;
}

try {
  console.log(divideBy(1, 0));
  console.log('kutya');
} catch (e) {
  console.log(e.message);
} finally {
  console.log('cica');
}