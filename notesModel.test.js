const NotesModel = require(`./notesModel`);

describe("NotesModel", () => {
  it("returns an empty list of notes", () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  });

  it("adds notes to list", () => {
    const model = new NotesModel();
    model.addNote("Note 1");
    model.addNote("Note 2");

    expect(model.getNotes()).toEqual(["Note 1", "Note 2"]);
  });

  it("sets the list to one provided", () => {
    const model = new NotesModel();
    model.setNotes(["Note 1", "Note 2"]);
    
    expect(model.getNotes()).toEqual(["Note 1", "Note 2"])
  });

  it("resets to an empty list", () => {
    const model = new NotesModel();
    model.addNote("Note 1");
    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
});
