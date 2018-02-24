console.log('starting notes.js');
const fs = require('fs');

	var readFile = () => {	
		try{
			let notes_file = fs.readFileSync('notes-data.json');
			return JSON.parse(notes_file);			
		}catch(e){
			return [];
		}
	};

	var saveNotes = (notes) => {
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	};

	var addNote = (title, body) => {
		let notes = readFile();
		let note = {
			title,
			body
		};
	
		let duplicacao = notes.filter((note) => {return note.title === title});

	
		if(duplicacao.length === 0){
			notes.push(note);	
			saveNotes(notes);
			return note;
		}
	
	};

	var removeNote = (title) => {
		//Removing note

		//fetch data
		let notes = readFile();
		//filter array
		let newNotes = notes.filter((note) => note.title !== title);
		//seve new array
		saveNotes(newNotes);
		return notes.length != newNotes.length
			
		
	};

	var getItem = (title) => {
		// Fetch data
		let notes = readFile();
		// filter the array looking for igual title register
		let note = notes.filter((notes) => notes.title === title);
		// Return the obj ou false			
		return note[0];
		
		
	};

	var logNote = (note) => {
		
			console.log('---');
			console.log(`Title: ${note.title}`);
			console.log(`Body: ${note.body}`);	
		
	};	

module.exports = {
	addNote,
	removeNote,
	getItem,
	logNote
};