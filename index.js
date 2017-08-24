
var selectedTodo = null;

function saveTodo(){
    var title = document.getElementById("title").value;
    var omschrijving = document.getElementById("omschrijving").value;
    var todolistul = document.getElementById("todolistul");

    var li = document.createElement("li");
    li.innerHTML = '' + title + ' <span>' + omschrijving + ' </span>';


    todolistul.appendChild(li);
}

function removeTodo(){
    if (selectedTodo){
        var todolistul = document.getElementById("todolistul");
        todolistul.removeChild(selectedTodo);
        selectedTodo = null;
        showDetails(selectedTodo);
    }
        
}

function selectTodo(){
    selectedTodo = event.target;
    showDetails(selectedTodo);
}

function showDetails(li){
    console.log('event', event.target);
    var title = document.getElementById("todoTitle");
    var desc = document.getElementById("todoDescription");
    title.innerHTML = li ? li.innerText : "";
    desc.innerHTML = li? li.getElementsByTagName("span")[0].innerText : "";
    btnDone.style.display = li ? "block" :"none";
}