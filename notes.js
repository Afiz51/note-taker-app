const fs = require("fs");

const getNotes = function () {
  return "Your notes";
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log("Title taken");
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    if (error) return [];
  }
};

const removeNotes = function (title) {
  try {
    const notes = loadNotes();
    const filteredNotes = notes.filter(function (note) {
      return note.title !== title;
    });

    saveNotes(filteredNotes);
  } catch (error) {
    if (error) console.log("error");
  }
};

module.exports = {
  getNotes,
  loadNotes,
  addNotes,
  removeNotes,
};
