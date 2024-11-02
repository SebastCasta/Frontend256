function mostrarProveedores() {
    let request = sendRequest("proveedores", "GET", "");
    let table = document.getElementById("proveedores-table");
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        console.log(data); //Verificamos acá si nos está trayendo los datos
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <td>${element.empresa}</td>
            <td>${element.contacto}</td>
            <td>${element.rut}</td>
            <td>${element.rut}</td>
            <td>${element.telefono_contacto}</td>
            <td>${element.ubicacion}</td>
            <td>
                <button type="button" class="btn btn-primary" onclick='window.location = "/form_proveedores.html?id=${element._id}"'>Editar</button>
                <button type="button" class="btn btn-danger" onclick='deleteProveedores("${element._id}")'>Eliminar</button>
                
            </td>
            </tr>
            `
        });
    }
    request.onerror = function(){
        table.innerHTML = `
        <tr>
        <td colspan="">Error al traer los datos</td>
        </tr>
        `
    }
}

function deleteProveedores(id) {
    let request = sendRequest("proveedores/"+id, "DELETE", "");
    request.onload = function(){
        mostrarProveedores();
    }
}

function guardarProveedores() {
    let emp = document.getElementById('empresa-e').value
    let cont = document.getElementById('contacto-c').value
    let rut = document.getElementById('rut-t').value
    let corr = document.getElementById('correo-c').value
    let tel = document.getElementById('telefono-t').value
    let ubi = document.getElementById('ubicacion-u').value
    let data = {'empresa':emp, 'contacto':cont, 'rut':rut, 'correo':corr, 'telefono_contacto':tel, 'ubicacion':ubi}
    let request = sendRequest('proveedores/', 'POST', data);    
    request.onload = function() {
        window.location = 'proveedores.html';
    }
    request.onerror = function() {
        console.log("Error al guardar los datos");
    }

} 

function cargarDatos(id) {
    let request = sendRequest("proveedores/"+id, "GET", "");
    let emp = document.getElementById('empresa-e')
    let cont = document.getElementById('contacto-c')
    let rut = document.getElementById('rut-t')
    let corr = document.getElementById('correo-c')
    let tel = document.getElementById('telefono-t')
    let ubi = document.getElementById('ubicacion-u')
    request.onload = function() {
        let data = request.response;
        emp.value = data.empresa
        cont.value = data.contacto
        rut.value = data.rut
        corr.value = data.correo
        tel.value = data.telefono_contacto
        ubi.value = data.ubicacion
        console.log(data);
    }
    request.onerror = function() {
        console.log("Error al cargar los datos");
    }
}

function actualizarProveedores(id) {
    let emp = document.getElementById('empresa-e').value;
    let cont = document.getElementById('contacto-c').value;
    let rut = document.getElementById('rut-t').value;
    let corr = document.getElementById('correo-c').value;
    let tel = document.getElementById('telefono-t').value;
    let ubi = document.getElementById('ubicacion-u').value;
    let data = {'empresa':emp, 'contacto':cont, 'rut':rut, 'correo':corr, 'telefono':tel, 'ubicacion':ubi};
    let request = sendRequest('proveedores/'+id, 'PUT', data);
    request.onload = function() {
        window.location = 'proveedores.html';
    }
    request.onerror = function() {
        console.log("Error al guardar los datos");
    }

} 