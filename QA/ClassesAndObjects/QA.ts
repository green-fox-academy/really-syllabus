class Human {
    private weight: number; // N
    private height: number; // cm
    constructor( w: number, h: number ) {
        this.weight = w;
        this.height = h;
    }
    setWeightByKg( w: number ) {
        this.weight = w * 10;
    }
    getWeightByKg() {
        return this.weight / 10;
    }
    setHeightByM( h: number ) {
        this.height = h * 100;
    }
    getHeightByM() {
        return this.height / 100;
    }
}

let h = new Human( 800, 180 );
let bmi: number = h.getWeightByKg() / Math.pow( h.getHeightByM(), 2 );

console.log( 'BMI (how to use object methods)' );
console.log( bmi );
console.log();

class Friend {
    name: string;
    constructor( name: string ) {
        this.name = name;
    }
    sayHello() {
        console.log( 'Hi I\'m', this.name );
    }
}

class Group {
    members: Friend[] = [];
    constructor() {}
    // Natural order (as how the array is filled)
    listFriendsOfGroup(): void {
        console.log( 'Natural order:' );
        this.members.forEach( function( groupMember: Friend ) {
            console.log( groupMember.name );
        } );
    }
    listFriendsOfGroupReverse(): void {
        let tempMembersList: Friend[] = this.members.slice( 0 );
        // Reverse order sort
        tempMembersList.sort( function( aFriend: Friend, bFriend: Friend ) {
            if ( aFriend.name < bFriend.name ) {
                // If one Friend is before other Friend in alphabet, then put on right side
                // Be greater
                return 1;
            }
            else if ( aFriend.name > bFriend.name ) {
                // If one Friend is after other Friend in alphabet, then put on left side
                // Be lesser
                return -1;
            }
            else {
                // Equals
                return 0;
            }

            /**
             * The comparison (< and >) works for strings as well.
             *
             * With numbers (i.e. age) we could simply use:
             * return aFriend.age - bFriend.age; // increasing order
             * return bFriend.age - aFriend.age; // decreasing order
             */
        } );
        console.log( 'Reverse order:' );
        tempMembersList.forEach( function( groupMember: Friend ) {
            console.log( groupMember.name );
        } );
    }
    introduceGroupMembers() {
        this.members.forEach( function( groupMember: Friend ) {
            groupMember.sayHello();
        } );
    }
}

let g = new Group();
let f1 = new Friend( 'AAA' );
let f2 = new Friend( 'BBB' );
let f3 = new Friend( 'CCC' );

g.members.push( f1 );
g.members.push( f2 );
g.members.push( f3 );

// Or we can do this way:
g.members.push( new Friend( 'ABC' ) );
g.members.push( new Friend( 'BAC' ) );
g.members.push( new Friend( 'CBA' ) );

console.log( 'Group of Friends (how to use objects contained by another object)')
g.listFriendsOfGroupReverse();
g.listFriendsOfGroup();
g.introduceGroupMembers();
console.log();

let a: number[] = [ 1, 2, 3 ];
console.log( 'Spread operator (it resolves the array as separated numbers)' );
console.log( 'This is 3 separated numbers and not an array:', ... a );
console.log( [ ... a, 10,, ... a ] );
console.log();

class First {
    lista: any[] = [];
    constructor() {}
}

class Second {
    lista: any[] = [];
    constructor() {}
    pushArrayToFirst( f: First ): void {
        // Basically this means the following (with the example numbers below in row 140):
        // f.lista.push( [ 100, 200 ] );
        f.lista.push( this.lista );
    }
    pushElementsToFirst( f: First ): void {
        // We can use spread operator here to resolve the array to elements
        // It works because push() can have as many arguments as we want
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push#Syntax
        // Basically this means the following (with the example numbers below in row 140):
        // f.lista.push( 100, 200 );
        f.lista.push( ... this.lista );
    }
}

let first = new First();
let second = new Second();
first.lista.push( 5 );
second.lista.push( 100, 200 );
second.pushArrayToFirst( first );
second.pushElementsToFirst( first );

console.log( 'How to use properties of other objects (we can see the different result of the 2 methods)' );
console.log( first.lista );