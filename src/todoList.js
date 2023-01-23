const content = document.querySelector(".content")
const addTodoBtn = document.querySelector(".new-todo-btn")

let todoStorage = [];

function Todo (title, description, date) {
    this.title = title
    this.description = description
    this.date = date
    this.id = Date.now()
    
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

//3const deleteBtn = document.createElement("button")

//const formBoxDataList = document.createElement("div")
//const DataListLabel = document.createElement("label")
//const dataList = document.createElement("sele")
//dataList.option = "malakas"


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
//form.appendChild(formBoxDataList)
//formBoxDataList.appendChild(DataListLabel)
//formBoxDataList.appendChild(dataList)

form.appendChild(sumbitBtn).className = "submit"
//1content.appendChild(deleteBtn).className = "delete"




labelTitle.textContent = "Title:"
labelDescription.textContent = "Description:"
sumbitBtn.textContent = "Submit"
//DataListLabel.textContent = "Urgency:"
//2deleteBtn.textContent = "Delete"



sumbitBtn.addEventListener('click', makeTodo)

//4deleteBtn.addEventListener("click", deleteTodo)

}

function makeTodo(ev) {
    const deleteBtn = document.createElement("button")
    content.appendChild(deleteBtn).className = "delete"

    const title = document.querySelector(".title")
    const description = document.querySelector(".description")
    const date = document.querySelector(".date")

    ev.preventDefault();
    console.log(ev)

    const todo = new Todo(title.value, description.value, date.value )
    deleteBtn.value = todo.id
        
    todoStorage.push(todo)
    console.log(todoStorage)
    
    ev.target.closest("form").remove() 
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", deleteTodo)
}


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
    //ev.target.closest('.card').remove();
}

export default formCreate
export {makeTodo}