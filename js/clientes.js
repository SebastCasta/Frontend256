function mostrarClientes() {
    let request = sendRequest("clientes", "GET", "");
    let table = document.getElementById("clientes-table");
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        console.log(data); //Verificamos acá si nos está trayendo los datos
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <td>${element.nombres}</td>
            <td>${element.apellidos}</td>
            <td>${element.documento}</td>
            <td>${element.correo}</td>
            <td>${element.telefono}</td>
            <td>${element.direccion}</td>
            <td>
                <button type="button" class="btn btn-primary" onclick='window.location = "/form_clientes.html?id=${element._id}"'>Editar</button>
                <button type="button" class="btn btn-danger" onclick='deleteClientes("${element._id}")'>Eliminar</button>
                
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

function deleteClientes(id) {
    let request = sendRequest("clientes/"+id, "DELETE", "");
    request.onload = function(){
        mostrarClientes();
    }
}

function guardarClientes() {
    let nom = document.getElementById('nombres-n').value
    let ape = document.getElementById('apellidos-a').value
    let doc = document.getElementById('documento-d').value
    let corr = document.getElementById('correo-c').value
    let tel = document.getElementById('telefono-t').value
    let dir = document.getElementById('direccion-d').value
    let data = {'nombres':nom, 'apellidos':ape, 'documento':doc, 'correo':corr, 'telefono':tel, 'direccion':dir}
    let request = sendRequest('clientes/', 'POST', data);
    request.onload = function() {
        window.location = 'clientes.html';
    }
    request.onerror = function() {
        console.log("Error al guardar los datos");
    }

} 

function cargarDatos(id) {
    let request = sendRequest("clientes/"+id, "GET", "")
    let nom = document.getElementById('nombres-n')
    let ape = document.getElementById('apellidos-a')
    let doc = document.getElementById('documento-d')
    let corr = document.getElementById('correo-c')
    let tel = document.getElementById('telefono-t')
    let dir = document.getElementById('direccion-d')
    request.onload = function() {
        let data = request.response
        nom.value = data.nombres
        ape.value = data.apellidos
        doc.value = data.documento
        corr.value = data.correo
        tel.value = data.telefono
        dir.value = data.direccion
        console.log(data);
    }
    request.onerror = function() {
        console.log("Error al cargar los datos");
    }
}

function actualizarClientes(id) {
    let nom = document.getElementById('nombres-n').value
    let ape = document.getElementById('apellidos-a').value
    let doc = document.getElementById('documento-d').value
    let corr = document.getElementById('correo-c').value
    let tel = document.getElementById('telefono-t').value
    let dir = document.getElementById('direccion-d').value
    let data = {'nombres':nom, 'apellidos':ape, 'documento':doc, 'correo':corr, 'telefono':tel, 'direccion':dir}
    let request = sendRequest('clientes/'+id, 'PUT', data);
    request.onload = function() {
        window.location = 'clientes.html';
    }
    request.onerror = function() {
        console.log("Error al guardar los datos");
    }

} 