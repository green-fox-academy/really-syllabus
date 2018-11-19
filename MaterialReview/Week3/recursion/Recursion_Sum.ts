// Sum all the numbers in this multi-dimensional array
let listOfNumbers = [
    [
        [ 1, 2, 3 ]
    ],
    [
        [ 4, 5, 6 ],
        [
            7,
            [
                8,
                [
                    9
                ]
            ]
        ]
    ]
];

function sum_Solution1( a: any[]|number ): number {
    if ( Array.isArray( a ) ) {
        let s = 0;
        for ( let i = 0; i < a.length; i++ ) {
            s += sum_Solution1( a[ i ] );
        }
        return s;
    }
    else {
        return a;
    }
}

function sum_Solution2( a: any[] ): number {
    let s = 0;
    for ( let i = 0; i < a.length; i++ ) {
        if ( typeof a[ i ] === 'number' ) {
            s += a[ i ];
        }
        else {
            s += sum_Solution2( a[ i ] );
        }
    }
    return s;
}

console.log( 'Sum Solution 1:', sum_Solution1( listOfNumbers ) );
console.log( 'Sum Solution 2:', sum_Solution2( listOfNumbers ) );
