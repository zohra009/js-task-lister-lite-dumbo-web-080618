// class TaskList {
// }
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
});
// document.getElementById("new-task-description").value //gives the value

let button = document.querySelectorAll("input")[1] //this gives me the submit button, that not an id or class
button.addEventListener("click", createTodoItem)


function getInputValue()    {
    return document.getElementById("new-task-description")
}

function createTodoItem(e)   {
    e.preventDefault() //prevent form going to new page and do action on the same page
    let listContainer = document.querySelector("#tasks")

    let new_todo = document.createElement("li")
    new_todo.innerHTML = getInputValue().value
    getInputValue().value = ""

    let new_button = document.createElement("button")
    new_button.innerText = "delete"
    new_button.addEventListener("click", (event) => {
        event.target.parentNode.remove() //the event is the placeholder for function which goes in to target(has many nodes) node-prarent the text we want to get rid off
    }) //if nodeParnetwasnt there then it will delete the deletebutton and not the actual text passed in

    new_todo.appendChild(new_button) //new_button is the child of the parent new_todo lists
    listContainer.appendChild(new_todo) //the lists are the children of the list of lists in the container (<ul></ul>) given to us 


}
