/*

Module for File System is "fs"

=> READING a File

fs.readFile( fileName , function(err, data){
    if (err) throw err;
    console.log(data);
})

=> CREATING / APPEND a File

fs.appendFile()
fs.open()
fs.writeFile()

=> DELETING a File

fs.unlink()

=> RENAME a File

fs.rename()

*/ 

var fs = require('fs');

