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
const descriptionLabel = document.createElement("label")
descriptionLabel.for = "description"
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
formBoxTitle.appendChild(title)
form.appendChild(sumbitBtn).className = "submit"




labelTitle.textContent = "Title:"
descriptionLabel.textContent = "Description"
sumbitBtn.textContent = "Submit"



sumbitBtn.addEventListener('click', makeTodo)

}

function makeTodo(ev) {
    ev.preventDefault();
    console.log(ev)

    const todo = new Todo(title.value, description.value, date.value)
        
    todoStorage.push(todo)
    
   
    
}

export default formCreate
export {makeTodo}