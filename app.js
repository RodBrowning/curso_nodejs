console.log('Starting App');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

let command = process.argv[2];
let argv = yargs.argv;
console.log('command', process.argv);




console.log('Command: ', yargs.argv);
	
	if(command == 'add'){
		notes.addNote(argv.title, argv.body);
	}else if(command == 'list'){
		console.log("listing all notes");
	}else if(command == 'read'){
		console.log('Reading notes');
	}else if(command == 'remove'){
		console.log('Removing note');
	}else{
		console.log('command not recognized');
	}



//fs.appendFile('comments.txt',`Hello ${user.username} you are ${notes.age}`,()=>{console.log('save successfully')});
//console.log(user.username);
