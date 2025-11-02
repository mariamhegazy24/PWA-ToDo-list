var button = document.getElementById("addbtn");
var input = document.getElementById("taskInput");
var table = document.getElementById("taskTable");

function addTask (){
   

var tasktext = input.value.trim(); // trim بتشيل المسافات من الاول و الاخر

if (tasktext === ""){
    alert ("please enter a task !");
    return;
}

/// عايزه اعمل صف جديد 

var row = document.createElement("tr");
// اعمل اول حاجه ال checkbox

var cbcell= document.createElement("td");
var cb = document.createElement("input");
cb.type = "checkbox";
cb.addEventListener("change", function (){

 taskCell.classList.toggle("done-task", cb.checked);

});
cbcell.appendChild(cb);
row.appendChild(cbcell);


// تاني حاجه ال task text

var taskCell = document.createElement("td");
taskCell.style.fontSize = "20px";
taskCell.textContent = tasktext;
row.appendChild(taskCell);

// تالت حاجه ال delete icon عايزه احطها في td

var delcell = document.createElement("td");
var bin = document.createElement("span");
bin.textContent = "🗑";
bin.className = "delete-icon";
bin.addEventListener("click", function (){
   
    if (confirm("Are you sure you want to delete this task")){

        row.remove();
    }
});
delcell.appendChild(bin);
row.appendChild(delcell);

table.appendChild(row);

input.value = ""; 


}


