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

function readFormData() {
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["password"] = document.getElementById("password").value;
	   formData["name"] = document.getElementById("name").value;
    formData["type"] = document.getElementById("type").value;
    formData["symptom"] = document.getElementById("symptom").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("patientList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.password;
	cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.name;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.type;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.symptom;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
	document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("symptom").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("password").value = selectedRow.cells[1].innerHTML;
	document.getElementById("name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("type").value = selectedRow.cells[3].innerHTML;
    document.getElementById("symptom").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.password;
	selectedRow.cells[2].innerHTML = formData.name;
    selectedRow.cells[3].innerHTML = formData.type;
    selectedRow.cells[4].innerHTML = formData.symptom;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("patientList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("username").value == "") {
        isValid = false;
        document.getElementById("usernameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("usernameValidationError").classList.contains("hide"))
            document.getElementById("usernameValidationError").classList.add("hide");
    }
    return isValid;
}

function readcentreData() {
    var formData = {};
    formData["centreName"] = document.getElementById("centreName").value;
    formData["oic"] = document.getElementById("oic").value;
    return formData;

}

function insertNewCentre(data) {
    var table = document.getElementById("centreList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.centreName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.oic;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = generateID();
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function validateCentre() {
    isValid = true;
    if (document.getElementById("centreName").value == "") {
        isValid = false;
        document.getElementById("centreValidate").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("centreValidate").classList.contains("hide"))
            document.getElementById("centreValidate").classList.add("hide");
    }
    return isValid;
}

function updatecentreRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.centreName;
    selectedRow.cells[1].innerHTML = formData.oic;
}

function onFormSubmitCentre() {
    if (validateCentre()) {
        var formData = readcentreData();
        if (selectedRow == null)
            insertNewCentre(formData);
        else
            updatecentreRecord(formData);
        resetForm();
    }
}

function generateID(){
    Math.floor(Math.random()*1000);
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("centreList").deleteRow(row.rowIndex);
        resetForm();
    }
}
