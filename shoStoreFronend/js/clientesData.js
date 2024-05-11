
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