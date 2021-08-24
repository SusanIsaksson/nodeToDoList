let bodyDiv = document.getElementById('bodyTodo') // hämtar bodydiv

let inputTodo = document.createElement('input')
let placeHolder = document.createElement('placeholder')
placeHolder.innerText = "Skriv ny Todo här..."


bodyDiv.appendChild(inputTodo)
inputTodo.appendChild(placeHolder)

let saveToDoBtn = document.createElement('button') //skapar knapp
let saveToDoText = document.createElement('h3') // skapar text på knapp
saveToDoText.innerText = "Spara" // text på knapp

bodyDiv.appendChild(saveToDoBtn)
saveToDoBtn.appendChild(saveToDoText)

saveToDoBtn.onclick = async function() {
    const status = await makeRequest("http://localhost:3000/api", "POST", {todoList: "Learn node Express"})

    console.log(status)
}

//------GET ------------------------------

let getToDoBtn = document.createElement('button')
let getToDoText = document.createElement('h3')
getToDoText.innerText = "Hämta Todo"

bodyDiv.appendChild(getToDoBtn)
getToDoBtn.appendChild(getToDoText)

getToDoBtn.onclick = async function() {
    const showTodo = await makeRequest("http://localhost:3000/api", "GET")
    const header = document.getElementsByTagName("h1")[0]
    header.innerText = showTodo

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
