console.log('Starting App');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')


let argv = yargs.argv;
console.log('command', process.argv);




console.log('Command: ', argv);
	if(argv === 'add'){
		notes.addNote(argv.title, argv.body);
	}else if(argv == 'list'){
		console.log("listing all notes");
	}else if(argv == 'read'){
		console.log('Reading notes');
	}else if(argv == 'remove'){
		console.log('Removing note');
	}else{
		console.log('command not removecognized');
	}



//fs.appendFile('comments.txt',`Hello ${user.username} you are ${notes.age}`,()=>{console.log('save successfully')});
//console.log(user.username);
