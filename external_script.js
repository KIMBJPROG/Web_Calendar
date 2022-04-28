let today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;
let day = today.getDate();
let totalDays = new Date(year,month,0).getDate();
let todoList = new Array(12);
let editSecToggle = 0;

for (let i=0; i<12; i++) {
    todoList[i] = new Array(31);
    for(let j=0; j<31; j++) {
        todoList[i][j] = new Array();
    }
}

function clearChild(id) {
    let parentEl = document.getElementById(id);
    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }
    return parentEl;
}

function makeMainCal(m, tday, id) {
    let parent = clearChild(id);
    const caption = document.createElement("caption");
    const capText = document.createTextNode(m+"월");
    const tbody = document.createElement("tbody");
    caption.appendChild(capText);
    parent.appendChild(caption);

    for (let i=0; i<=tday/7; i++) {
        const tr = document.createElement("tr");
        for (let j=1; j<=7; j++) {
            if(i*7+j > tday)
                break;
            const td = document.createElement("td");
            const textNode = document.createTextNode((i*7+j)+"일");
            td.appendChild(textNode);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    if (m == month) {
        console.log(tbody.rows[parseInt(day/7)].cells[day%7-1]);
        tbody.rows[parseInt((day-1)/7)].cells[(day-1)%7].style.backgroundColor = "lightpink";
    }
    parent.appendChild(tbody);
}

function makeTodoList(m, d, id) {
    let parent = clearChild(id);
    for(let i=0; i<todoList[m-1][d-1].length; i++) {
        const li = document.createElement("li");
        const textNode = document.createTextNode(todoList[m-1][d-1][i]);
        li.appendChild(textNode);
        parent.appendChild(li);
    }
}

function addTodo() {
    let text = document.getElementById("todoInput").value;
    if (text == '')
        return;
    document.getElementById("todoInput").value = '';
    todoList[month-1][day-1].push(text);
    makeTodoList(month, day, "mainTodoLi");
}

function editSecSwitch() {
    if (!editSecToggle) {
        document.getElementById("editSec").style.transform = "scale(1.0)";
        document.getElementById("mainSecShield").style.display = "block";
        editSecToggle = 1;
    } else {
        document.getElementById("editSec").style.transform = "scale(0.0)";
        document.getElementById("mainSecShield").style.display = "none";
        editSecToggle = 0;
    }
}