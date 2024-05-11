document.addEventListener('DOMContentLoaded', function () {
    EnumTipoDato();
    EnumEstado();
  });

  function EnumTipoDato(){
  
  fetch('http://localhost:9000/shoeStore/v1/api/enum/tipo-identificacion')
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al enviar los datos');
      }
      return response.json();
  })
  .then(data => {
      const TypeId = data;
      
      const selectElement = document.getElementById('tipoIdentificacion');
  
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
        nombreCliente: nombre,
        apellidoCliente: apellido,
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
        Swal.fire({
            icon: "success",
            title: "Correto !",
            text: "Datos enviados exitosamente!",
          }); 

          cleanData();
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
        alert('Error al enviar los datos. Por favor, inténtalo de nuevo.');
    });
}

function cleanData(){
document.getElementById("identificacion").value = "";
document.getElementById("nombre").value = "";
document.getElementById("apellido").value = "";
document.getElementById("telefono").value = "";
document.getElementById("direccion").value = "";
document.getElementById("ciudad").value = "";
document.getElementById("estado").value = "";

}