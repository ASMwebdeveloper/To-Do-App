const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something ")
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    inputBox.value = '';
    saveData() // for save data
}

listContainer.addEventListener("click",function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData() // for save data
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData() // for save data
    } 
}, false);

// ****************** For save data on storage ******************

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML)
}

// ****************** For show data on storage ******************


function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()