class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const inputEL = document.querySelector('#input').value;
      this.inputNote(inputEL);
      document.querySelector('#input').value = "";
    });
  }

  inputNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll(".note").forEach(note => {
      note.remove();
    });

    const notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEL = document.createElement("div");
      noteEL.textContent = note;
      noteEL.className = "note";
      this.mainContainerEl.append(noteEL);
    });
  }
  
  displayNotesFromAPI() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }
}

module.exports = NotesView;
