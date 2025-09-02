function add(){
  let input = document.getElementById("task");
  work = input.value;
  if(work === ""){alert(enter a task")};
  let item = document.createElement("li");
  item.textContent = "work";
  document.getElementById("todo").appendChild(item);
                  let delbtn = document.createElement("button");
                  delbtn.textContent = "Delete task";
                  delbtn.onclick = item.remove();
                  item.appendChild(delbtn);

                  let box = document.createElement("input");
                  box.type = "checkbox"
                  item.appendChild(box)
}
  
