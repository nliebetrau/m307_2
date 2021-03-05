function onFormSubmit(){
    var formData = readFormData();
    insertNew(formData);



}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["vorname"] = document.getElementById("vorname").value;
    formData["mail"] = document.getElementById("mail").value;
    formData["num"] = document.getElementById("num").value;
    formData["kategorie"] = document.getElementById("kategorie").value;
    formData["spez"] = document.getElementById("spez").value;
    formData["fragen"] = document.getElementById("fragen").value;
    return formData;
}

function insertNew(data) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.vorname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mail;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.num;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.kategorie;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.spez;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.fragen;
    cell7 = newRow.insertCell(7);
    cell7.innerHtml = '<a>Delete</a>';
}

