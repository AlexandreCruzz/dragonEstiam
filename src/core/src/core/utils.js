export function addDragons(main, dragons){

    dragons.names.forEach(element => {
        var li = document.createElement("li"),
            content = document.createTextNode("{ id:" + element.id + ", name: " + element.name + " }"),
            myUl = document.getElementById("list");

        li.appendChild(content)
        myUl.appendChild(li);
        //main.textContent = "{ id:" + element.id + ", name: " + element.name + " }"
    });
}