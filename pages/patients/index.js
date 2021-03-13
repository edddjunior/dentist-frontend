var xhr = new XMLHttpRequest();
var API_URL = "http://localhost:3000"
var module = "patient"

// CRUD HANDLERS
window.onload = function () {
    console.log("list")
    fetchPatients();
};

function fetchPatients() {
    xhr.open('GET', API_URL + "/patients");
    xhr.onload = function () {
        var patients = JSON.parse(xhr.responseText);
        renderPatientList(patients);
    }
    xhr.send(null);
}

function renderPatientList(patients) {
    console.log(patients)
    var patientList = '';
    for (var i = 0; i < patients.length; i++) {
        patientList += '<li class="patient-row" id="patient-row">'
            + patients[i].id + " - "
            + patients[i].name + " - "
            + patients[i].age
            + ' <button "default-btn remove-btn" id="edit-btn-' + i + '">Editar</button>'
            + ' <button "default-btn remove-btn" id="remove-btn-' + i + '">Remover</button>'
            + '</li > ';
    }
    document.querySelector("#patient-list").innerHTML = patientList;

    for (var i = 0; i < patients.length; i++) {
        document.querySelector("#edit-btn-" + i).addEventListener('click', function () {
            console.log("edit")
            editPatient();
        });
        document.querySelector("#remove-btn-" + i).addEventListener('click', function () {
            console.log("remove")
            editPatient();
        });
    }
}









function postPatient() {
    var data = {};
    data.id = 4;
    data.nome = "Ulisses";
    data.idade = 23;
    var json = JSON.stringify(data);
    xhr.open("POST", API_URL + "/patients", true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var patient = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.log(patient);
        } else {
            console.error(patient);
        }
    }
    xhr.send(json);
}

function editPatient() {
    var data = {};
    data.id = 3;
    data.nome = "José sem sobrenome";
    data.idade = 25;
    var json = JSON.stringify(data);
    xhr.open("PUT", url + '/patients/' + data.id, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var patient = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log(patient);
        } else {
            console.error(patient);
        }
    }
    xhr.send(json);
}

function removePatient(params) {
    var data = {};
    data.id = 3;
    xhr.open("DELETE", API_URL + '/patients' + data.id, true);
    xhr.onload = function () {
        var patients = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(patients);
        } else {
            console.error(patients);
        }
    }
    xhr.send(null);
}
