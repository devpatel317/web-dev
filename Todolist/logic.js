const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const mainSection = document.querySelector('.task-section');

btn.addEventListener('click', (evt) => {
    let data = input.value;
    if(data != '')
    {   
        addTask(data);
    }
    else
    {
        alert("Please enter any task");
    }
    input.value = '';
})

const addTask = (data) =>
{
    let element = document.createElement('div');
    element.className = 'container';
    mainSection.append(element);
    let checkBtn = document.createElement('div');
    checkBtn.className = 'result';
    let taskPart = document.createElement('div');
    taskPart.className = 'task'; 
    let deleteBtn = document.createElement('div');
    deleteBtn.className = 'delete-btn';
    element.append(checkBtn,taskPart,deleteBtn);
    let contant = document.createElement('p');
    contant.innerText = data;

    taskPart.append(contant);
    let chkIcon = document.createElement('i');
    chkIcon.className = 'fa-solid fa-check';
    checkBtn.append(chkIcon);

    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-regular fa-trash-can';
    deleteBtn.append(deleteIcon);

    deleteBtn.addEventListener('click' , () => {
        deleteTask(deleteBtn);
    })

    //when task colmpleted
    element.addEventListener('click' , () =>
    {
        changeTaskColor(checkBtn,element);
    }) 
}

const deleteTask = (deleteBtn) =>
{
       // deleteTask();
       let parentEle = deleteBtn.parentElement;
       // console.log(parentEle);
       parentEle.style.display = "none";
}

const changeTaskColor = (checkBtn,element) =>
{
    checkBtn.classList.toggle('makeGreen');
    element.classList.toggle('changeBg');
}


