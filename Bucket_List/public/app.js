function addItem() {
    var input = document.getElementById("new-item-input");
    var itemText = input.value;
    
    if (itemText === "") {
      return;
    }
    
    var newItem = document.createElement("div");
    newItem.className = "bucketList";
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleCompleted);
    
    var label = document.createElement("label");
    
    label.textContent = itemText;
    
    newItem.appendChild(label);
    newItem.appendChild(checkbox);
    document.getElementById("about").appendChild(newItem);
    
    input.value = "";
  }
  
  function toggleCompleted(event) {
    var checkbox = event.target;
    var listItem = checkbox.parentNode;
    
    if (checkbox.checked) {
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  }
  function resetList() {
    var list = document.getElementById("about");
    while (list.firstChild) {
      list.firstChild.remove();
    }
  }
