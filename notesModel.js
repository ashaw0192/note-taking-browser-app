class NotesModel {
  constructor() {
    this.list = [];
  }

  getNotes() {
    return this.list;
  }

  addNote(newNote) {
    this.list.push(newNote);
  }

  setNotes(notes) {
    this.list = notes;
  }

  reset() {
    this.list = [];
  }
}

module.exports = NotesModel;
