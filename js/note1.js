const btnElement = document.getElementById("btn");
const appElement = document.getElementById("app");

getNotes().forEach((note) =>{
    const noteElement = createNotes(note.id, note.content);
    appElement.insertBefore(noteElement, btnElement);
});

function createNotes(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Enter notes";
    element.value = content;

    element.addEventListener("dblclick", ()=> {
        const warning = confirm("Do you want to delete This note?");
        if (warning){
            deleteNote(id, element);
        }
    });

    element.addEventListener("input", ()=>{
        updateNote(id, element.value);
    });
    return element;
}

function deleteNote(id, element){
    const notes = getNotes().filter((notes) => notes.id != id);
    saveNotes(notes);
    appElement.removeChild(element);
}

function updateNote(id, content){
    const notes = getNotes();
    const target = notes.filter((notes) => notes.id == id)[0];
    target.content = content;
    saveNotes(notes);
}

function addNote(){

    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    const noteElement = createNotes(noteObj.id, noteObj.content);
    appElement.insertBefore(noteElement, btnElement);
    notes.push(noteObj);
    saveNotes(notes);
}

// function to save notes to local storage
function saveNotes(notes){
    localStorage.setItem("note-app", JSON.stringify(notes));
}

// function to get notes from local storage
function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnElement.addEventListener("click", addNote);