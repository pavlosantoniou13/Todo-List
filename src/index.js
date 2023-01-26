import './styles/styles.css'
import formCreate from './todoList'
import makeTodo from './todoList'
import projectCreate from './projects'
import formProjectCreate from './projects'
import clearBox from './clearBox'
import createMainPage from './mainpage'
import project1CreatePage from './projectone'

createMainPage()
const content = document.querySelector(".content")
const projectContainer = document.querySelector(".project-container")

//project 1 on html
const project1Div = document.querySelector(".project1")
//Home div on html
const home = document.querySelector(".main-page")

home.addEventListener("click", () => {
    // move the card declaration here
    clearBox(projectContainer)
    createMainPage()
    
      
})


project1Div.addEventListener("click", () => {
    // move the card declaration here
    clearBox(projectContainer)
    project1CreatePage()
    
      
})


const addTodoBtn = document.querySelector(".new-todo-btn")
addTodoBtn.addEventListener("click", formCreate)

let addProjectBtn = document.querySelector(".add-project")
addProjectBtn.addEventListener("click", formProjectCreate)


//const sumbitBtn = document.querySelector(".submit")
//sumbitBtn.addEventListener('click', projectCreate)
  


