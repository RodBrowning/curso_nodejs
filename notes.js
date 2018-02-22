console.log('starting notes.js');
const fs = require('fs');

let addNote = (title, body) => {
	let notes = [];
	let note = {
		title,
		body
	};

	try{
		notes = JSON.parse(fs.readFileSync('notes-data.json'));	
		
	}catch(e){}
	
	

	let duplicacao = notes.filter((note) => {note.title == title});

	if(duplicacao.length > 0){
		notes.push(note);	
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));	
	}
	
};

module.exports = {
	addNote
};