document.addEventListener('DOMContentLoaded', function () {
    loadData();
  
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
            <td>`+ item.idCliente + `</td>
            <td>`+ item.tipoIdentificacion + `</td>
            <td>`+ item.nombreCliente + `</td>
            <td>`+ item.apellidoCliente + `</td>
            <td>`+ item.telefono + `</td>
            <td>`+ item.direccion + `</td>
            <td>`+ item.ciudad + `</td>
            <td>`+ (item.estado == true ? 'Activo' : 'Inactivo') + `</td>
            <th><img src="../utils/icons/pencil-square.svg" alt="" onclick="findById(`+ item.id + `)"></th>
            <th><img src="../utils/icons/trash3.svg" alt="" onclick="deleteById(`+ item.id + `)"></th>
            <th><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="../../assets/icons/search.svg" alt="" onclick="detailsProduct(`+ item.id + `)"></a></th>
        </tr>`;
        });

        document.getElementById('resultData').innerHTML = html;

    })
}


document.getElementById("clienteForm").addEventListener("submit", function(event){
    event.preventDefault();
  });

function save(){


    var tipoIdentificacion = document.getElementById("tipoIdentificacion").value;
    var identificacion = document.getElementById("identificacion").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var ciudad = document.getElementById("ciudad").value;
    var estado = document.getElementById("estado").value;

    // Construye el objeto con los datos del cliente
    var clienteData = {
        tipoIdentificacion: tipoIdentificacion,
        identificacion: identificacion,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        ciudad: ciudad,
        estado: estado
    };

    // Realiza la solicitud fetch para enviar los datos a un endpoint
    fetch('http://localhost:9000/shoeStore/v1/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clienteData)
    })
    .then(response => {
        if (!response.ok) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });            }
        return response.json();
    })
    .then(data => {
        // Maneja la respuesta del servidor
        console.log('Datos enviados correctamente:', data);
        alert('Datos enviados correctamente');
    })
    .catch(error => {
        // Maneja cualquier error que ocurra durante la solicitud fetch
        console.error('Error al enviar los datos:', error);
        alert('Error al enviar los datos. Por favor, inténtalo de nuevo.');
    });
}