function add(){
  let input = document.getElementById("task");
  let work = input.value;
  if(work === ""){alert("enter a task")
                  return;
                 }
  let item = document.createElement("li");
  item.textContent = work;
  document.getElementById("todo").appendChild(item);
                  let delbtn = document.createElement("button");
                  delbtn.textContent = "Delete task";
                  delbtn.onclick = function(){item.remove();};
                  item.appendChild(delbtn);

                  let box = document.createElement("input");
                  box.type = "checkbox";
                  item.appendChild(box);

                  
}
  
function clearall(){
  let ul = document.getElementById("todo");
  ul.innerHTML = "";}
