
document.addEventListener('DOMContentLoaded', function () {
    loadData();  
  });

  
document.getElementById("clienteForm").addEventListener("submit", function(event){
    event.preventDefault();
  });

function loadData(){
    fetch('http://localhost:9000/shoeStore/v1/api/clientes',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error();
        }
        return response.json();
    })
    .then((data)=>{
        var html = '';

        const client = data.data

        client.forEach((item) => {
            html += `<tr>
            <td>`+ item.tipoIdentificacion + `</td>
            <td>`+ item.identificacion + `</td>
            <td>`+ item.nombreCliente + `</td>
            <td>`+ item.apellidoCliente + `</td>
            <td>`+ item.telefono + `</td>
            <td>`+ item.ciudad + `</td>
            <td>`+ item.direccion + `</td>
            <td>`+ (item.estado == true ? 'Activo' : 'Inactivo') + `</td>
            <th><img src="../utils/icons/pencil-square.svg" alt="" onclick="findById(`+ item.id + `)"></th>
            <th><img src="../utils/icons/trash3.svg" alt="" onclick="deleteById(`+ item.id + `)"></th>
            <th><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="../../assets/icons/search.svg" alt="" onclick="detailsProduct(`+ item.id + `)"></a></th>
        </tr>`;
        });

        document.getElementById('resultData').innerHTML = html;

    })

}
function loadFilter() {
    // Obtener los valores de los filtros
    var nombre = document.getElementById('filtroNombre').value;
    var ciudad = document.getElementById('filtroCiudad').value;
    var estado = document.getElementById('filtroEstado').value;

    var url = new URL('http://localhost:9000/shoeStore/v1/api/clientes/filtros');
    url.searchParams.append('nombre', nombre);
    url.searchParams.append('ciudad', ciudad);
    url.searchParams.append('estado', estado);

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    })
    .then((data) => {
        var html = '';

        const client = data.data

        client.forEach((item) => {
            html += `<tr>
            <td>`+ item.tipoIdentificacion + `</td>
            <td>`+ item.identificacion + `</td>
            <td>`+ item.nombreCliente + `</td>
            <td>`+ item.apellido + `</td>
            <td>`+ item.telefono + `</td>
            <td>`+ item.ciudad + `</td>
            <td>`+ item.direccion + `</td>
            <td>`+ item.estado + `</td>
            <th><img src="../utils/icons/pencil-square.svg" alt="" onclick="findById(`+ item.id + `)"></th>
            <th><img src="../utils/icons/trash3.svg" alt="" onclick="deleteById(`+ item.id + `)"></th>
            <th><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="../../assets/icons/search.svg" alt="" onclick="detailsProduct(`+ item.id + `)"></a></th>
        </tr>`;
        });

        document.getElementById('resultData').innerHTML = html;

    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
