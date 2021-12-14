button = document.getElementsByClassName("btn");

var noteId = 0;

let draggable;
let head;
let title;
let iconContainer;
let saveIcon;
let deleteIcon;
let textarea;

function createNote(text){
    draggable = document.createElement('div'); 
    draggable.classList.add("draggable");
    draggable.setAttribute("id", "note" + noteId++); 

    head = document.createElement('div'); 
    head.classList.add("head");
    
    draggable.appendChild(head);

    title = document.createElement('h3'); 
    title.classList.add("title"); 
    title.innerHTML = "Title Section";
    
    head.appendChild(title);

    iconContainer = document.createElement('div');
    iconContainer.classList.add("icon-container");
    
    head.appendChild(iconContainer)
    
    saveIcon = document.createElement('i');
    saveIcon.classList.add("far", "fa-save", "icon");
    saveIcon.setAttribute("id", "save");

    deleteIcon = document.createElement('i'); 
    deleteIcon.classList.add("far", "fa-trash-alt", "icon");
    deleteIcon.setAttribute("id", "delete");


    iconContainer.appendChild(deleteIcon);
    iconContainer.appendChild(saveIcon);
    

    textarea = document.createElement('textarea');
    textarea.name = "note" + noteId;
    textarea.id = "note" + noteId;
    textarea.placeholder = "Resize from the bottom left corner";

    draggable.appendChild(textarea);

    document.body.appendChild(draggable);

    saveIcon.addEventListener("click", function(){
        alert("Saved!");
    });
    deleteIcon.addEventListener("click", function(){
        alert("Deleted!");
    })

    $(function () {
        $(".draggable").draggable();
        $("#" + noteId).draggable();
    });
}

