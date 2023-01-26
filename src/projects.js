let addProjectBtn = document.querySelector(".add-project")
let formDiv = document.querySelector(".form-container")
let projectContainer = document.querySelector(".userProject")
// get the project add button from html
addProjectBtn.addEventListener("click", formProjectCreate)

//creates the form to make a project
function formProjectCreate() {
    const form = document.createElement("form")
    const formBoxProject = document.createElement("div")
    const projectLabel = document.createElement("label")
    
    const input = document.createElement("input")
    const submitProject = document.createElement("button")
    submitProject.type = "submit"

    formDiv.appendChild(form).className = "form"
    form.appendChild(formBoxProject).className = "formBox"
    formBoxProject.appendChild(projectLabel).className = "projectLabel"
    formBoxProject.appendChild(input).className ="input"
    formBoxProject.appendChild(submitProject).className = "submitProject"

    projectLabel.textContent = "Project Name"
    submitProject.textContent = "Add"

    submitProject.addEventListener("click", projectCreate)
}


//takes the form details and creates a project card
function projectCreate(ev) {
    //stoping the submit
    ev.preventDefault();
     
    
    //getting the values
   const input = document.querySelector(".input")

    const project =  projectFactory(input.value)

    console.log(project)

   ev.target.closest("form").remove() 

   //project card
   const projectCard = document.createElement("div")
   const projectName = document.createElement("h1")
   const ProjectTask = document.createElement("div")
   const taskTitle = document.createElement("p")
   const todoCard = document.createElement("div")
   const addTodo = document.createElement('button') 
   
   projectContainer.appendChild(projectCard).className = "projectCard"
   projectCard.appendChild(projectName).className = "projectName"
   projectCard.appendChild(ProjectTask).className = "projectTask"
   ProjectTask.appendChild(taskTitle).className = "taskTitle" 
   projectCard.appendChild(todoCard).className = "todoCard"
   projectCard.appendChild(addTodo).className = "add-todo-Btn2" 


   projectName.textContent = input.value
   todoCard.textContent = "Add Todo"
   addTodo.textContent = "+"
   
    

} 



// default Project

const defaultProject = projectFactory("Default Project")
console.log(defaultProject)
export {defaultProject}

//project factory function
function projectFactory(title) {
    return { 
      title,
      tasks: []
    }
    
} 





export default formProjectCreate