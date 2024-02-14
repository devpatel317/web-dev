const createBtn = document.querySelector('.create_note_btn button');
const container = document.querySelector('.container');

const updateData = () =>
{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    // console.log(textAreaData);
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    // console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNote = (text = '') =>
{
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    // console.log(newNote);

    const html = `
    <div class="oprations">
        <button class="edit-btn"><i class="fa-solid fa-pen"></i>edit</button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>        
    <div class="main ${text ? 'hidden' : ''}"></div>
    <textarea class="${text ? '' : 'hidden'}"></textarea>`
    newNote.insertAdjacentHTML("afterbegin",html);
    
    const deleteBtn = newNote.querySelector('.delete-btn');
    const editBtn = newNote.querySelector('.edit-btn');
    const maindiv = newNote.querySelector('.main');
    const textArea = newNote.querySelector('textarea'); 
    
    deleteBtn.addEventListener('click' , () => {
        newNote.remove();
        updateData();
    })

    maindiv.innerHTML = text;
    textArea.innerHTML = text;

    editBtn.addEventListener('click' , () =>
    {
        maindiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');

    })

    textArea.addEventListener('change' , (e) =>
    {
        const value = e.target.value;
        maindiv.innerHTML = value;

        updateData();
    })

    container.appendChild(newNote);
}

//Getting data back
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes)
{
    notes.forEach( (note) => addNote(note));
}

createBtn.addEventListener('click' , () =>
{
    addNote();
})

