declare function require(path:string): any;
const test = require('tape');

import { returnTruthy, returnFalsy, sum, throwException } from './functions';

test( 'truthy and falsy', ( t: any ) => {
  t.plan(2);
  t.ok( returnTruthy() );
  t.notOk( returnFalsy() );
} );

test( 'error (will pass when err is falsy)', ( t: any ) => {
  t.error( false );
  t.end();
} );

test( 'add 2 numbers', ( t: any ) => {
  t.plan(2)
  t.equal( sum( 1, 2 ), 3 );
  t.notEqual( sum( 2, 2 ), 5 );
} );

test( 'deep equal 2 arrays', function( t: any ) {
  const actual = [ 1, 2, 3 ];
  const expectedSimilar = [ 1, 2, 3 ];
  const expectedSameRef = actual;
  const expectedWrongOrder = [ 3, 2, 1 ];

  t.plan(3);
  // value order is important in arrays
  t.notDeepEqual( actual, expectedWrongOrder );
  t.notEqual( actual, expectedSimilar );
  t.equal( actual, expectedSameRef )
} );

test( 'exception', function( testCase: any ) {
  testCase.plan(2);
  testCase.throws( throwException );
  testCase.doesNotThrow( sum );
} );