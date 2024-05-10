
    document.addEventListener('DOMContentLoaded', function () {
        loadData();
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
            <td>`+ (item.state == true ? 'Activo' : 'Inactivo') + `</td>
            <th><img src="../utils/icons/pencil-square.svg" alt="" onclick="findById(`+ item.id + `)"></th>
            <th><img src="../utils/icons/trash3.svg" alt="" onclick="deleteById(`+ item.id + `)"></th>
            <th><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="../../assets/icons/search.svg" alt="" onclick="detailsProduct(`+ item.id + `)"></a></th>
        </tr>`;
        });

        document.getElementById('resultData').innerHTML = html;

    })

    }

    document.getElementById("productoForm").addEventListener("submit", function(event){
        event.preventDefault();
      });

    function save() {
                var nombre = document.getElementById("nombre").value;
        var descripcion = document.getElementById("descripcion").value;
        var cantidad = document.getElementById("cantidad").value;
        var precio = document.getElementById("precio").value;
        var iva = document.getElementById("iva").value;
        var descuento = document.getElementById("descuento").value;
        var estado = document.getElementById("estado").value;

        // Construye el objeto con los datos del producto
        var productoData = {
            nombre: nombre,
            descripcion: descripcion,
            cantidad: cantidad,
            precio: precio,
            iva: iva,
            descuento: descuento,
            estado: estado
        };

        // Realiza la solicitud fetch para enviar los datos a un endpoint
        fetch('http://localhost:9000/shoeStore/v1/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoData)
        })
        .then(response => {
            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });  
                throw new Error('Error al enviar los datos');
            }
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
