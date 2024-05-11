
document.addEventListener('DOMContentLoaded', function () {
    loadData();
});


document.getElementById("productoForm").addEventListener("submit", function(event){
    event.preventDefault();
  });

function loadData(){

fetch('http://localhost:9000/shoeStore/v1/api/productos',{
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

    const product = data.data

    product.forEach((item) => {
        html += `<tr>
        <td>`+ item.idProducto + `</td>
        <td>`+ item.nombreProducto + `</td>
        <td>`+ item.cantidad + `</td>
        <td>`+ item.precio + `</td>
        <td>`+ item.porcentajeIva + `</td>
        <td>`+ item.porcentajeDescuento + `</td>
        <td>`+ item.estado + `</td>
        <th><img src="../utils/icons/pencil-square.svg" alt="" onclick="findById(`+ item.id + `)"></th>
        <th><img src="../utils/icons/trash3.svg" alt="" onclick="deleteById(`+ item.id + `)"></th>
        <th><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="../../assets/icons/search.svg" alt="" onclick="detailsProduct(`+ item.id + `)"></a></th>
    </tr>`;
    });

    document.getElementById('resultData').innerHTML = html;

})

}

