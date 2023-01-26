const content = document.querySelector(".content")
function createMainPage() {
    //add todo button
    let todoContainer = document.createElement("div")
    let addTodoDiv = document.createElement("div")
    let addTodoButtonContainer = document.createElement("div")
    let addTodoButton = document.createElement("button")
    //project card
    let  projectContainer = document.createElement("div")
    let projectCard = document.createElement("div")
    let currentCard = document.createElement("div")
    let currentCardTitle = document.createElement("div")
    let currentCardTasks = document.createElement("div")
    let currentProjectTasks = document.createElement("div")
    //append to the DOM add todo button
    content.appendChild(projectContainer).className = "project-container"
    projectContainer.appendChild(todoContainer).className = "Todo-container"
    todoContainer.appendChild(addTodoDiv).className = "add-todo-div" //text content = add todo
    todoContainer.appendChild(addTodoButtonContainer).className = "button-container"
    addTodoButtonContainer.appendChild(addTodoButton).className = "new-todo-btn"

    //append to the DOM project card
    projectContainer.appendChild(projectCard).className = "project-card"
    projectCard.appendChild(currentCard).className = "current-card"
    currentCard.appendChild(currentCardTitle).className = "current-card-title"
    currentCard.appendChild(currentCardTasks).className = "current-card-tasks"
    projectCard.appendChild(currentProjectTasks).className = "current-project-tasks"
    //add todo text contents
    addTodoDiv.textContent = "Add Todo"
    addTodoButton.textContent = "+"

    //current projects card text contents
    currentCardTitle.textContent = "Default Project"
    currentCardTasks.textContent = "Tasks"

}


export default createMainPage