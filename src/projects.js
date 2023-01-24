/*function projectFactory(title) {
    return { 
      title,
      todos: []
    }
} */

function ProjectFactory (title) {
    this.title = title
    todos = []
    this.id = Date.now()
    
}


function projectCreate(ev) {
    ev.preventDefault();
    console.log("malakas")
}

export default projectCreate