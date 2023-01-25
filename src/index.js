import './styles/styles.css'
import formCreate from './todoList'
//import makeTodo from './createTodoItem'
import makeTodo from './todoList'
import projectCreate from './projects'
import formProjectCreate from './projects'
const content = document.querySelector(".content")



const addTodoBtn = document.querySelector(".new-todo-btn")
addTodoBtn.addEventListener("click", formCreate)

let addProjectBtn = document.querySelector(".add-project")
addProjectBtn.addEventListener("click", formProjectCreate)


//const sumbitBtn = document.querySelector(".submit")
//sumbitBtn.addEventListener('click', projectCreate)
  


