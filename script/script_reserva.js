var meuFormulario = document.getElementById("cadastro_professor");

//const meuFormulario = document.querySelector('.form');

meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(meuFormulario);
  console.log( formData );

  console.log("chamando o fetch...");
  chamarServidor();
  
});



function chamarServidor() {

  console.log("Chegou no fetch");
    
  fetch('http://192.168.1.100/ping', 
    { method: 'GET' }
  )
    .then(response => response.text())
    .then(texto => console.log(texto))
    .catch(err => console.log(err.message))

}


