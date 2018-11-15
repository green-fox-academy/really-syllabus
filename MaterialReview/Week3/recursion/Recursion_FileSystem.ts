
declare function require( path: string ): any;
let fs = require('fs')

// List of file system files and directories
function listDir( path: string ): void {
    let dirContent: any[] = fs.readdirSync( path );

    // Walk through path
    dirContent.forEach( function( elem ) {
        let elemPath = ( path + '/' + elem );
        let level = elemPath.split( '/' ).length - 2;
        if ( fs.lstatSync( elemPath ).isDirectory() ) {
            // Log directory name
            console.log( 'D', '\t'.repeat( level ), elem );
            // and step inside
            listDir( elemPath );
        }
        else {
            // Log filename
            console.log( 'F', '\t'.repeat( level ), elem );
        }
    } );
}

listDir( '.' );