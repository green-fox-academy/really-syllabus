declare function require(path:string): any;
const fs = require('fs');

export function returnTruthy(): number {
    return 5;
}

export function returnFalsy(): null {
    return null;
}

export function sum( a: number, b: number ): number {
    return a + b;
}

export function throwException(): void {
    let fc = fs.readFileSync( 'does-not-exist.txt' );
}

// These 2 functions below are not part of testing but practice
// - primitives which are passed by their value
// - non-primitives which are passed by their reference
//
// Remember, primitives are: number, string, boolean, null, undefined
function testPrimitive() {
  let a: number = 5;
  let b: number = a;

  a += 1;
  b += 2;

  console.log( 'Passed by Value' );
  console.log( 'A =', a );
  console.log( 'b =', b );
}

function testReference() {
  let c: number[] = [ 5 ];
  let d: number[] = c;

  d.push( 6 );

  console.log( 'Passed by Reference' );
  console.log( 'c =', c );
  console.log( 'd =', d );
}

testPrimitive();
testReference();
