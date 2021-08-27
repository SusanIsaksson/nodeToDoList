let bodyDiv = document.getElementById('body') // hämtar bodydiv

let saveTodoBtn = document.createElement('button') //skapar knapp
let saveTodoText = document.createElement('h3') // skapar text på knapp
saveTodoText.innerText = "Spara" // text på knapp

bodyDiv.appendChild(saveTodoBtn)
saveTodoBtn.appendChild(saveTodoText)

saveTodoBtn.onclick = async function() {

    let todoInput = document.getElementById('someValue').value 
    console.log(todoInput)

    const status = await makeRequest("http://localhost:3000/api", "POST", {todoList: todoInput})

    console.log(status)
}

//------GET ------------------------------

let getTodoBtn = document.createElement('button')  //skapar knapp
let getTodoText = document.createElement('h3')     // skapar h4
getTodoText.innerText = "Hämta Todo"           //text på knapp

bodyDiv.appendChild(getTodoBtn)
getTodoBtn.appendChild(getTodoText)

    getTodoBtn.onclick = async function() {
        const showTodoList = await makeRequest("http://localhost:3000/api", "GET")
        console.log(showTodoList)

        for (let i = 0; i < showTodoList.length; i++) {
            
            const todoShow = document.createElement('div')
            todoShow.innerText = showTodoList[i].todoList
            //console.log(showTodo[i])
            console.log(todoShow)

            document.getElementById('todoDiv').appendChild(todoShow) 
        }
        

    //console.log("Hämtar ToDO - klickad")
}

async function makeRequest(url, method, body){
    try {
        const response = await fetch(url, {
            headers: {"Content-Type": "application/json"}, //påverkar reg i index.js
            method,
            body: JSON.stringify(body)
        })

        console.log(response) //för att kolla "undefined"

        const result = await response.json()

        return result
    } catch(err) {
        console.log(err)
    }
}
