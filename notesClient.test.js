const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('NotesClient', () => {
  it('calls fetch and loads the notes list', (done) => {
    const client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify({
      list: ["Some note"]
    }));

    client.loadNotes((notes) => {
      expect(notes.list).toEqual(['Some note']);

      done();
    })
  });
});