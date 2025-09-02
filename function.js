function add(){
  let input = document.getElementById("task");
  work = input.value;
  if(work === ""){alert(enter a task")};
  let item = document.createElement("li");
  item.textContent = "work";
  document.getElementById("todo").appendChild("item");
}
  
