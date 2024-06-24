function add_item() {
    let item = document.getElementById("box");
    let list_item = documnet.getElementById("list_item");
    if(item.value !="" ) {
       let make_li = documnet.createElement("li");
       make_li.appendChild(document.createTextNode(item.value));
       list_item.appendChild(make_li);
       item.value = ""
       
       make_li.onclick = function(){
        this.parentNode.removeChild(this);
       }
    }
    else{
        alert("Please add a value to a item")
    }
}