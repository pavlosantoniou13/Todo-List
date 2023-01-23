const sumbitBtn =  document.querySelector('.sumbitBtn')

function Todo (title, description, date) {
    this.title = title
    this.description = description
    this.date = date
    
}

let todoStorage = [];






function makeTodo(ev) {
    ev.preventDefault();
    console.log(ev)

    const todo = new Todo(title.value, description.value, date.value)
        
    todoStorage.push(todo)
    
   
    
}
 


export default makeTodo

