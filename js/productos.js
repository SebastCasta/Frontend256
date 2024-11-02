function mostrarProductos() {
    let request = sendRequest("productos", "GET", "");
    let table = document.getElementById("productos-table");
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        console.log(data); //Verificamos acá si nos está trayendo los datos
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <td>${element._id}</td>
            <td>${element.referencia}</td>
            <td>${element.fabricante}</td>
            <td>${element.capacidad}</td>
            <td>${element.precio}</td>
            <td>${element.cantidad_disponible}</td>
            <td>
                <button type="button" class="btn btn-primary" onclick='window.location = "/form_productos.html?id=${element._id}"'>Editar</button>
                <button type="button" class="btn btn-danger" onclick='deleteProductos("${element._id}")'>Eliminar</button>
                
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

function deleteProductos(id) {
    let request = sendRequest("productos/"+id, "DELETE", "");
    request.onload = function(){
        mostrarProductos();
    }
}

function guardarProductos() {
    let ref  = document.getElementById('referencia-r').value
    let fab = document.getElementById('fabricante-f').value
    let cap = document.getElementById('capacidad-c').value
    let pre = document.getElementById('precio-p').value
    let cant = document.getElementById('cantidad-d').value
    let data = {'referencia':ref, 'fabricante':fab, 'capacidad':cap, 'precio':pre, 'cantidad_disponible':cant}
    let request = sendRequest('productos/', 'POST', data);    
    request.onload = function() {
        window.location = 'productos.html';
    }
    request.onerror = function() {
        console.log("Error al guardar los datos");
    }

} 

function cargarDatos(id) {
    let request = sendRequest("productos/"+id, "GET", "");
    let ref  = document.getElementById('referencia-r')
    let fab = document.getElementById('fabricante-f')
    let cap = document.getElementById('capacidad-c')
    let pre = document.getElementById('precio-p')
    let cant = document.getElementById('cantidad-d')
    request.onload = function() {
        let data = request.response;
        ref.value = data.referencia
        fab.value = data.fabricante
        cap.value = data.capacidad
        pre.value = data.precio
        cant.value = data.cantidad_disponible
        console.log(data);
    }
    request.onerror = function() {
        console.log("Error al cargar los datos");
    }
}

function actualizarProductos(id) {
    let ref  = document.getElementById('referencia-r').value
    let fab = document.getElementById('fabricante-f').value
    let cap = document.getElementById('capacidad-c').value
    let pre = document.getElementById('precio-p').value
    let cant = document.getElementById('cantidad-d').value
    let data = {'referencia':ref, 'fabricante':fab, 'capacidad':cap, 'precio':pre, 'cantidad_disponible':cant}
    let request = sendRequest('productos/'+id, 'PUT', data);    
    request.onload = function() {
        window.location = 'productos.html';
    }
    request.onerror = function() {
        console.log("Error al guardar los datos");
    }

} 