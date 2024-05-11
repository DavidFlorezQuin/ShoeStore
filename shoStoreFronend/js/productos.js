
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
            Swal.fire({
                icon: "success",
                title: "Correto !",
                text: "Datos enviados exitosamente!",
              }); 
        })
        .catch(error => {
            // Maneja cualquier error que ocurra durante la solicitud fetch
            console.error('Error al enviar los datos:', error);
            alert('Error al enviar los datos. Por favor, inténtalo de nuevo.');
        });
    }
