document.addEventListener('DOMContentLoaded', function () {
    EnumEstado();
  });


document.getElementById("productoForm").addEventListener("submit", function(event){
    event.preventDefault();
  });

  function EnumEstado(){

    
    fetch('http://localhost:9000/shoeStore/v1/api/enum/estado')
    .then(response => {
      if (!response.ok) {
          throw new Error('Error al enviar los datos');
        }
        return response.json();
    })
  .then(data => {
      const TypeId = data;
      
      const selectElement = document.getElementById('estado');
  
      selectElement.innerHTML = '';
      
      // Iterar sobre los datos recibidos y crear las opciones del select2
      TypeId.forEach(TypeId => {
          const option = document.createElement('option');
          option.value = TypeId; 
          option.text = TypeId; 
          selectElement.appendChild(option);
      });
  })
  .catch(error => {
      console.error('Error al enviar los datos:', error);
  });

}
    
    // FUNCION PARA GUARDAR

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
            nombreProducto: nombre,
            descripcion: descripcion,
            cantidad: cantidad,
            precio: precio,
            porcentajeIva: iva,
            porcentajeDescuento: descuento,
            estado: estado

        };
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
            }
            return response.json();
        })
        .then(data => {
            Swal.fire({
                icon: "success",
                title: "Correto !",
                text: "Datos enviados exitosamente!",
              }); 
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
            alert('Error al enviar los datos. Por favor, inténtalo de nuevo.');
        });
    }


// FUNCION PARA BUSCAR

function findById(id){
    
    fetch('http://localhost:9000/shoeStore/v1/api/productos/' + id, {
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
  
        const datos = data.data; 
  
        document.getElementById("id").value = datos.idProducto;
        document.getElementById("nombre").value = datos.nombreProducto;
        document.getElementById("descripcion").value = datos.descripcion;
        document.getElementById("cantidad").value = datos.cantidad;
        document.getElementById("precio").value = datos.precio;
        document.getElementById("iva").value = datos.porcentajeIva;
        document.getElementById("descuento").value = datos.porcentajeDescuento;
        document.getElementById("descuento").value = datos.estado;


      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
}

    // LISTA DE ESTADO

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
                <th>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"">
                <img src="../utils/icons/pencil-square.svg" alt="" onclick="findById(`+ item.idProducto + `)">
                </button>
                </th>

                <th>
                <button class="btn btn-danger">
                <img src="../utils/icons/trash3.svg" alt="" onclick="deleteById(`+ item.idProducto + `)">
                </button>
                </th>
            
                </tr>`;
            });
        
            document.getElementById('resultData').innerHTML = html;
        
        })
        
        }

        function findById(id) {
            fetch('http://localhost:9000/shoeStore/v1/api/productos/' + id, {
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
        
                // Enviar los datos al iframe como un mensaje
                iframe.contentWindow.postMessage(datos, '*');
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
        }
        
        window.addEventListener('message', function(event) {
            // Verificar el origen del mensaje si es necesario
        
            // Obtener los datos enviados desde el archivo principal
            var datos = event.data;
        
            document.getElementById("id").value = datos.idProducto;
            document.getElementById("nombre").value = datos.nombreProducto;
            document.getElementById("descripcion").value = datos.descripcion;
            document.getElementById("cantidad").value = datos.cantidad;
            document.getElementById("precio").value = datos.precio;
            document.getElementById("iva").value = datos.porcentajeIva;
            document.getElementById("descuento").value = datos.porcentajeDescuento;
            document.getElementById("estado").value = datos.estado;

            var btnAgregar = document.querySelector('.btnAgregar');
            btnAgregar.textContent = 'Actualizar';
            btnAgregar.setAttribute('onclick', 'update()');
            
        });
        
        
function update(id){

    var data = {
        idProducto: document.getElementById("id").value, 
        nombreProducto: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        cantidad: document.getElementById("cantidad").value,
        precio: document.getElementById("precio").value,
        porcentajeIva: document.getElementById("iva").value,
        porcentajeDescuento: document.getElementById("descuento").value,
        estado: document.getElementById("estado").value
    }


    var id = document.getElementById("id").value;
    var jsonData = JSON.stringify(data);


    fetch("http://localhost:9000/shoeStore/v1/api/productos/"+id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((response) => {
          if (!response.ok) {
            Swal.fire({
                icon: "error",
                title: "Fallido !",
                text: "Ocurrió un error!",
              });    
                   }
          return response.json();
        })
        .then((result) => {
            Swal.fire({
                icon: "success",
                title: "Existoso !",
                text: "Se ha actualizado con exito!",

            });            
            loadData();
          loadData();
        })
        .catch((error) => {
          console.error("Error al actualizar el registro:", error);
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
                fetch('http://localhost:9000/shoeStore/v1/api/productos/' + id, {
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
    
    
    

    

function loadFilter() {
    // Obtener los valores de los filtros
    var nombre = document.getElementById('filtroNombre').value;
    var estado = document.getElementById('filtroEstado').value;

    var url = new URL('http://localhost:9000/shoeStore/v1/api/productos/filtros');
    url.searchParams.append('nombre', nombre);
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

        const product = data.data

        product.forEach((item) => {
            html += `<tr>
                <td>`+ item.id + `</td>
                <td>`+ item.nombreProducto + `</td>
                <td>`+ item.cantidad + `</td>
                <td>`+ item.precio + `</td>
                <td>`+ item.iva + `</td>
                <td>`+ item.descuento + `</td>
                <td>`+ item.estado + `</td>
            <th>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"">
            <img src="../utils/icons/pencil-square.svg" alt="" onclick="findById(`+ item.idProducto + `)">
            </button>
            </th>
            <th><img src="../utils/icons/trash3.svg" alt="" onclick="deleteById(`+ item.idProducto + `)"></th>
        
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