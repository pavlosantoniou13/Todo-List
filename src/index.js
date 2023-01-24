import './styles/styles.css'
import formCreate from './todoList'
//import makeTodo from './createTodoItem'
import makeTodo from './todoList'
import projectCreate from './projects'
const content = document.querySelector(".content")



const addTodoBtn = document.querySelector(".new-todo-btn")
addTodoBtn.addEventListener("click", formCreate)

//const sumbitBtn = document.querySelector(".submit")
//sumbitBtn.addEventListener('click', projectCreate)
  


