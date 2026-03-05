const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let todos = [];

function render(){
list.innerHTML = "";

todos.forEach((todo,index)=>{

const li = document.createElement("li");

const span = document.createElement("span");
span.textContent = todo;

const delBtn = document.createElement("button");
delBtn.textContent = "Delete";

delBtn.onclick = ()=>{
todos.splice(index,1);
render();
};

li.appendChild(span);
li.appendChild(delBtn);

list.appendChild(li);

});
}

function addTodo(){

const text = input.value.trim();

if(text==="") return;

todos.push(text);

input.value="";

render();

}

addBtn.addEventListener("click",addTodo);

input.addEventListener("keydown",(e)=>{
if(e.key==="Enter"){
addTodo();
}
});
