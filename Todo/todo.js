console.log("ToDo");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

console.log(taskInput, addBtn, taskList);

let addBtnAlt = document.querySelector("button");
console.log(addBtnAlt);

// button clicked


addBtnAlt.addEventListener("click", function(){
    console.log("btn clicked");
});

taskinput.addEventListener("keydown",(event) => {
    if (event.key == "Enter"){
        console.log("Enter passed",taskInput.value)
    }
})

//create elemet 
let li = document.createElement("li");
li.textContent ="learn js"
console.log(li)
