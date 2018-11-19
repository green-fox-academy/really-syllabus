
class Person {
    name: string;
    dad?: Person;
    mom?: Person;
    constructor( name: string, dad?: Person, mom?: Person ) {
        this.name = name;
        this.dad = dad;
        this.mom = mom;
    }
}

function familyTree( p: Person ) {
    // Consider we don't want to step more if at least one parent is missing
    if ( typeof p.mom === 'undefined' || typeof p.dad === 'undefined' ) return p.name;
    else {
        let s: string = '';
        s += p.name + ': { ';
        s += 'dad: ' + familyTree( p.dad );
        s += ', ';
        s += 'mom: ' + familyTree( p.mom );
        s += '} ';
        return s;
    }
}

let dadOfDad = new Person( 'Grandpa (Dad)' );
let momOfDad = new Person( 'Grandma (Dad)' );
let dad = new Person( 'Dad', dadOfDad, momOfDad );

let dadOfMom = new Person( 'Grandpa (Mom)' );
let momOfMom = new Person( 'Grandma (Mom)' );
let mom = new Person( 'Mom', dadOfMom, momOfMom );

let me = new Person( 'Me', dad, mom );

console.log( 'Family tree:', familyTree( me ) );