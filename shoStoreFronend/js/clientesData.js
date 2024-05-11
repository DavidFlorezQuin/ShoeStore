
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
            <td>`+ item.estado  + `</td>
            <th>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="findById(`+ item.idCliente + `)">
            <img src="../utils/icons/pencil-square.svg" alt=""></th>
            </button>
            </th>

            <th>
            <button class="btn btn-danger onclick="deleteById(`+ item.idCliente + `)">
                <img src="../utils/icons/trash3.svg" alt="" ">
            </button>
            </th>
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
            <th><img src="../utils/icons/pencil-square.svg" alt="" onclick="findById(`+ item.id_cliente + `)"></th>
            <th>
            <button class="btn btn-danger">
           <img src="../utils/icons/trash3.svg" alt="" onclick="deleteById(`+ item.id_cliente + `)">
            </button>
            </th>
        </tr>`;
        });

        document.getElementById('resultData').innerHTML = html;

    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function clearFilter(){
   document.getElementById('filtroNombre').value = '';
   document.getElementById('filtroCiudad').value = '';
    document.getElementById('filtroEstado').value = '';
}


function findById(id) {
    fetch('http://localhost:9000/shoeStore/v1/api/clientes/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then(data => {

        var iframe = document.getElementById('miIframe');

  
        const datos = data.data; 
  
        var datosInput = {
            tipoIdentificacion: datos.tipoIdentificacion,
            identificacion: datos.identificacion,
            nombre: datos.nombreCliente,
            apellido: datos.apellidoCliente,
            telefono: datos.telefono,
            direccion: datos.direccion,
            ciudad: datos.ciudad,
            estado: datos.estado
        }

        iframe.contentWindow.postMessage(datosInput, '*');

  
        var btnAgregar = document.querySelector('.btnAgregar');
        btnAgregar.textContent = 'Actualizar';
        btnAgregar.setAttribute('onclick', 'update()');
        
      })
      .catch(error => {
        // Función que se ejecuta si hay un error en la solicitud
        console.error('Error en la solicitud:', error);
      });
  }

  
  function deleteById(id) {
    Swal.fire({
        title: "Está seguro que desea eliminar?",
        text: "No podrás recuperar la información!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, hazlo!"
    }).then((result) => {
        if (result.isConfirmed) {
            fetch('http://localhost:9000/shoeStore/v1/api/clientes/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                Swal.fire({
                    title: "Eliminado!",
                    text: "Tu archivo se eliminó con éxito.",
                    icon: "success"
                });

                loadData();
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
        }
    });  
}


