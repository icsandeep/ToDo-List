const toDoItems = document.getElementsByClassName("to-do-items")[0]
const input = document.getElementById("input")
const trashIcon = document.getElementById("trash")

input.addEventListener("keydown", function event(){
    if(event.key === "Enter")
    addItem()
})

function addItem(){
    let divParent = document.createElement("div")
    let divChild = document.createElement("div")
    let checkIcon = document.createElement("i")
    let trashIcon = document.createElement("i")

    divParent.className = "item"
    divParent.innerHTML = '<div>'+input.value+'</div>'

    checkIcon.className = "fas fa-check-square"
    checkIcon.style.color = "lightgray"
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "green"
    })

    divChild.appendChild(checkIcon)

    trashIcon.className = "fas fa-trash"
    trashIcon.style.color = "darkgrat"
    trashIcon.addEventListener("click", function(){
        divParent.remove()
    })

    divChild.appendChild(trashIcon)
    divParent.appendChild(divChild)
    toDoItems.appendChild(divParent)
    input.value = ''




}