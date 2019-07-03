function mainfunction(){
    let locallength = localStorage.length;
    const table = document.getElementById("table");

    for (i=0; i<locallength; i++){
        let stringname = "data"+i;
        let value = JSON.parse(localStorage.getItem(stringname));
        console.log(value);

        let td1= document.createElement("td");
        let td2= document.createElement("td");
        let td3= document.createElement("td");
        let tr = document.createElement("tr");
        let node1 = document.createTextNode(value.email);
        let node2 = document.createTextNode(value.name);
        let node3 = document.createTextNode(value.password);
       
        td1.appendChild(node1);
        td2.appendChild(node2);
        td3.appendChild(node3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
}