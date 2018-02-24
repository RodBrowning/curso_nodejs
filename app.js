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
		
	//---- Add command
	if(command == 'add'){
		let note = notes.addNote(argv.title, argv.body);
		if(note) {
			console.log('Note saved');
			notes.logNote(note);
		}else{
			console.log('Note was taken');
		}
		
		
	//-------  List command
			}else if(command == 'list'){
				console.log("listing all notes");


	//------------------ Read command
				}else if(command == 'read'){

					let note = notes.getItem(argv.title);
					if(note) {
						console.log('Note found');
						notes.logNote(note);
					}else{
						console.log('Note was not found');
					}

	//------------------ Remove command
					}else if(command == 'remove'){

						let bool = notes.removeNote(argv.title);
						let msg  = bool ? "item deleted" : "item not found";
						console.log(msg);

	//------------------ Unrecognized commands
						}else{
							console.log('command not recognized');
						}



//fs.appendFile('comments.txt',`Hello ${user.username} you are ${notes.age}`,()=>{console.log('save successfully')});
//console.log(user.username);
