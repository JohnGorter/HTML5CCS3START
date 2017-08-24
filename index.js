
var selectedTodo = null;

function saveTodo(){
    var titleinput = document.getElementById("title");
    var omschrijvinginput = document.getElementById("omschrijving")
    if (titleinput.validity.valid && omschrijvinginput.validity.valid) {
        var title = titleinput.value;
        var omschrijving = omschrijvinginput.value;
        var todolistul = document.getElementById("todolistul");
        var li = document.createElement("li");
        li.innerHTML = '' + title + ' <span>' + omschrijving + ' </span>';
        todolistul.appendChild(li);
        document.querySelector("#noitems").hidden =!(todolistul.childElementCount == 0);
        document.getElementById("error").innerHTML = '';
        titleinput.value = '';
        omschrijvinginput.value = '';
    } else {
        document.getElementById("error").innerHTML = 'Ongeldige invoer, probeer opnieuw!';
    }
}

function removeTodo(){
    if (selectedTodo){
        var todolistul = document.getElementById("todolistul");
        todolistul.removeChild(selectedTodo);
        document.querySelector("#noitems").hidden = !(todolistul.childElementCount == 0);
        selectedTodo = null;
        showDetails(selectedTodo);
    }
        
}

function selectTodo(){
    selectedTodo = event.target;
    showDetails(selectedTodo);
}

function showDetails(li){
    var title = document.getElementById("todoTitle");
    var desc = document.getElementById("todoDescription");
    var details = document.querySelector("#tododetail")
    if (li) {
        title.innerHTML = li.innerText;
        desc.innerHTML = li.getElementsByTagName("span")[0].innerText;
        btnDone.style.display = "block";
    }
    if (!li || (li && document.querySelector("#tododetail").hidden)) {
        if (li) {
             document.querySelector("#tododetail").hidden = false;
             document.querySelector("#tododetail").style.opacity = '1';
        }
        var player = details.animate([{opacity:li?'0':'1'}, {opacity:li?'1':'0'}], {duration:700,easing:'ease-in-out'});
        player.onfinish = () => {
            document.querySelector("#tododetail").hidden = !li;
            document.querySelector("#tododetail").style.opacity = li ? '1' : '0';
            title.innerHTML = li ? li.innerText : "";
            desc.innerHTML = li? li.getElementsByTagName("span")[0].innerText : "";
            btnDone.style.display = li ? "block" :"none";
        };
    }
    
}