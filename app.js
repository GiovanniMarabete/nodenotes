console.log('Starting app.js');

const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note != undefined) {
        console.log('Note created!');
        // console.log('--');
        // console.log(`Note created with Title: "${argv.title}" and Body: "${argv.body}"`);
        notes.logNote(note);
    } else {
        console.log('Note title taken!');
    };
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var noteRead = notes.getNote(argv.title);
    var message = noteRead ? `Note found -- Title: ${noteRead[0].title} -- Body: ${noteRead[0].body}` : 'Note not found';
    console.log(message);
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized!');
    
}