const fs = require('fs');

var objNote = {
	nome : "Rodrigo"
}

var stgNote = JSON.stringify(objNote);
console.log(typeof stgNote);
console.log(stgNote);


fs.writeFileSync('notes.json',stgNote);

var readNote = fs.readFileSync('notes.json');

var noteOjg = JSON.parse(readNote);

console.log(typeof noteOjg);
console.log(noteOjg);
console.log(noteOjg.nome);
