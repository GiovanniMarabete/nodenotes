console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try {
    var notesString = fs.readFileSync('notes-data,json');
    //console.log(notesString);
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data,json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
      title,
      body
  };

// var duplicateNotes = notes.filter((note) => {
//   return note.title === title;
// });

 var duplicateNotes = notes.filter((note) => note.title === title);

 if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  //console.log('Getting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  //console.log('Getting note', title);
  var notes = fetchNotes();
  var gottenNotes = notes.filter((note) => note.title === title);
  if (gottenNotes.length !== 0) {
    return gottenNotes;
  }
  // var gottenNotes = notes.filter((note) => note.title === title);
  // return gottenNotes;
};

var removeNote = (title) => {
  //console.log('Removing note', title);
  var notes = fetchNotes();
  var FilteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(FilteredNotes);
  return notes.length !== FilteredNotes.length;
};

var logNote = (note) => {
  console.log('--');
  console.log(`Note  Title: "${argv.title}" - Note Body: "${argv.body}"`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
