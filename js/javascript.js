var selectedRow = null

function onFormSubmit() {
    if (validate()) {

        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function displayDate(){
	document.getElementById("date").innerHTML() = Date();
}
function readFormData() {
    var formData = {};
    formData["type"] = document.getElementById("type").value;
    formData["symptom"] = document.getElementById("symptom").value;
    formData["status"] = document.getElementById("status").value;
	formData["date"] = document.getElementById("date").value;
	formData["id"] = document.getElementById("id").value;
    return formData;

}
function insertNewRecord(data) {
    var table = document.getElementById("testList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.type;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.symptom;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.status;
    cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.date;
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = data.id;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("type").value = "";
    document.getElementById("symptom").value = "";
    document.getElementById("status").value = "";
	document.getElementById("date").value = "";
	document.getElementById("date").value = "";
	document.getElementById("id").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("type").value = selectedRow.cells[0].innerHTML;
    document.getElementById("symptom").value = selectedRow.cells[1].innerHTML;
    document.getElementById("status").value = selectedRow.cells[2].innerHTML;
	document.getElementById("date").value = selectedRow.cells[3].innerHTML =d;
	document.getElementById("id").value = selectedRow.cells[3].innerHTML =d;
   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.type;
    selectedRow.cells[1].innerHTML = formData.symptom;
	selectedRow.cells[2].innerHTML = formData.status;
	selectedRow.cells[3].innerHTML = formData.date;
	selectedRow.cells[4].innerHTML = formData.id;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("testList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("type").value == "") {
        isValid = false;
        document.getElementById("typeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("typeValidationError").classList.contains("hide"))
            document.getElementById("typeValidationError").classList.add("hide");
    }
    return isValid;
}