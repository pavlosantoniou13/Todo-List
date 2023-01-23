const content = document.querySelector(".content")
const addTodoBtn = document.querySelector(".new-todo-btn")

let todoStorage = [];

function Todo (title, description, date) {
    this.title = title
    this.description = description
    this.date = date

    
}




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

content.appendChild(form).className = "form";
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

function makeTodo(ev) {

    const title = document.querySelector(".title")
    const description = document.querySelector(".description")
    const date = document.querySelector(".date")

    ev.preventDefault();
    console.log(ev)

    const todo = new Todo(title.value, description.value, date.value )
        
    todoStorage.push(todo)
    console.log(todoStorage)
    
   
    
}

export default formCreate
export {makeTodo}