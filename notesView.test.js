/**
 * @jest-environment jsdom
 */

const fs = require(`fs`);
const NotesClient = require(`./notesClient`);
const NotesModel = require(`./notesModel`);
const NotesView = require(`./notesView`);

require('jest-fetch-mock').enableMocks()
jest.mock('./notesClient')

describe("NotesView", () => {
  it("clicks the button and adds a note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const client = new NotesClient();
    const view = new NotesView(model);

    const inputEL = document.querySelector('#input');
    inputEL.value = "First note"
    const buttonEL = document.querySelector('#add-note-button');
    buttonEL.click();

    expect(document.querySelectorAll("div.note").length).toBe(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual("First note");
  });

  it("clears the list between each entry", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const client = new NotesClient();
    const view = new NotesView(model, client);

    const inputEL = document.querySelector('#input');
    inputEL.value = "First note"
    const buttonEL = document.querySelector('#add-note-button');
    buttonEL.click();
    const inputEL2 = document.querySelector('#input');
    inputEL2.value = "Second note"
    buttonEL.click();

    expect(document.querySelectorAll("div.note").length).toBe(2);
  })

  it("loads notes from API", (done) => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const client = new NotesClient();
    const view = new NotesView(model, client);

    client.loadNotes.mockImplementation((callback) => {
      const data = ["Some note"];
      return callback(data)
    });

    //const data = fetch.mockResponseOnce(JSON.stringify(
    //  ["Some note"]
    //));

    //client.loadNotes((callback) => {
    //  return callback(data)
    //})

    view.displayNotesFromAPI();
    expect(document.querySelectorAll("div.note")[0].textContent).toBe("Some note");
  
    done();
    
  })
});
