import { defaultProject } from "./projects";
import { addTodoButton } from "./mainpage";
const projectContainer = document.querySelector(".project-container")

const defaultProjectVar = defaultProject

const content = document.querySelector(".content")
const addTodoBtn = document.querySelector(".new-todo-btn")
//storage for todos
let todoStorage = [];

//todo constructor
function Todo (title, description, date) {
    this.title = title
    this.description = description
    this.date = date
    this.id = Date.now()
    
}

//function projectFactory(title) {
   // return { 
   //   title,
    //  tasks: []
   // }
//} 

//const home = projectFactory("Home")

// First FormCreate create a form
function formCreate() {  
const form = document.createElement("form")
const formBoxTitle = document.createElement("div")
const labelTitle = document.createElement("label")
labelTitle.for = "title"
const title = document.createElement("input")

const formBoxDescription = document.createElement("div")
const labelDescription = document.createElement("label")
labelDescription.for = "title"
const description = document.createElement("input")

const formBoxDate = document.createElement("div")
const dueDateLabel = document.createElement("label")
dueDateLabel.for = "date"
const dueDate = document.createElement("input")
dueDate.type = "date"

const sumbitBtn = document.createElement("button")
sumbitBtn.type = "submit"

content.appendChild(projectContainer).className = "project-container"
projectContainer.appendChild(form).className = "form";
form.appendChild(formBoxTitle)
formBoxTitle.appendChild(labelTitle)
formBoxTitle.appendChild(title).className = "title"
form.appendChild(formBoxDescription)
formBoxDescription.appendChild(labelDescription)
formBoxDescription.appendChild(description).className = "description"
form.appendChild(formBoxDate)
formBoxDate.appendChild(dueDateLabel)
formBoxDate.appendChild(dueDate).className = "date"

form.appendChild(sumbitBtn).className = "submit"


labelTitle.textContent = "Title:"
labelDescription.textContent = "Description:"
sumbitBtn.textContent = "Submit"

sumbitBtn.addEventListener('click', makeTodo)
}


//  make todo makes the todo object and and pushes it,and then creates a card with the info
function makeTodo(ev) {
    ev.preventDefault();
    const title = document.querySelector(".title")
    const description = document.querySelector(".description")
    const date = document.querySelector(".date")

    const card = document.createElement("div")
    let cardText = document.createElement("div")
    let para1 = document.createElement("p");
    let para2 = document.createElement("p"); 
    let para3 = document.createElement("p"); 
    const deleteBtn = document.createElement("button")

    // edw pou einai pou tha fanei sto DOM h karta
    content.appendChild(projectContainer).className = "project-container"
    projectContainer.appendChild(card).className = "card"
    card.appendChild(cardText).className = "cardText"
    cardText.appendChild(para1).className = "title"
    cardText.appendChild(para2).className = "description"
    cardText.appendChild(para3).className = "date"
    card.appendChild(deleteBtn).className = "delete"

    //creates todo 
    const todo = new Todo(title.value, description.value, date.value )
    //matches the delete button with the todo id 
    deleteBtn.value = todo.id
    //pushes the new todo to the todoStorage
    todoStorage.push(todo)
    //edw prepei na uparxei enas tropos na mporw na stelnw to kathe todo sto project pou thelw
    defaultProjectVar.tasks.push(todo)
    console.log(todoStorage)
    // deletes the todo form
    ev.target.closest("form").remove() 

    //Fills the Todo Card with the inputs that it got from the Todo form
    para1.textContent = "Title:" + " " + title.value
    para2.textContent = "Description:" + " " +   description.value
    para3.textContent = "Date:" + " " +    date.value
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", deleteTodo)

   console.log(defaultProjectVar)
   // projectCreate(ev)
      
    
}

//function projectCreate(ev) {
  //  ev.preventDefault();
  //  console.log(home)
//}


// last deletes the todo from they array and from the DOM
// second deletes the task(todo) that passed in to the given project
function deleteTodo(ev){
    const id = ev.target.value;
    todoStorage = todoStorage.filter(
       todo => {
       if(todo.id == id) {
        return false
       } else {
        return true
       }
    })
    defaultProjectVar.tasks = defaultProjectVar.tasks.filter(
        todo => {
        if(todo.id == id) {
         return false
        } else {
         return true
        }
     })
    
    ev.target.closest('.card').remove();
}








export default formCreate
export {makeTodo}