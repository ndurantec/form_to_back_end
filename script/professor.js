/*
var meuFormulario = document.getElementById("cadastro_professor");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log('Chegou no javascript');
});
*/

//primeira versão do método salvar
function salvar_1() {
    console.log('Chegou no javascript');
    //alert('Chegou no javascript');
}

function salvar_2() {

  const nome = document.getElementById('nome').value;
  console.log(nome);
    
}

function salvar_3() {
  const nome = document.getElementById('nome').value;
  console.log(nome);

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  fetch('localhost:8080/professor/inserir' ,{

  }); 

}


function salvar_4() {
  const nome = document.getElementById('nome').value;
  console.log(nome);

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  fetch('localhost:8080/professor/inserir' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
       
    body: JSON.stringify({ nome: nome }), // Convertendo o objeto JavaScript para JSON

    headers: headers

  }); 

}




function salvar_4() {
  const nome = document.getElementById('nome').value;
  console.log(nome);

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  fetch('http://10.47.7.2:8080/professor/insert' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
       
    body: JSON.stringify({ nome: nome }), // Convertendo o objeto JavaScript para JSON

    headers: headers

  }).then(response => {

    if(response.ok) {
      console.log('Foi no servidor e voltou');

    }

  }); 

}



function salvar_5() {
  const nome = document.getElementById('nome').value;
  console.log(nome);

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  fetch('http://10.47.7.2:8080/professor/insert' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
       
    body: JSON.stringify({ nome: nome }), // Convertendo o objeto JavaScript para JSON

    headers: headers

  }).then(response => {

    if(response.ok) {
      console.log('Foi no servidor e voltou');
      window.location.href = 'sucesso.html'    
    }

  }); 

}





function salvar() {
  const nome = document.getElementById('nome').value;
  console.log(nome);

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  fetch('http://10.47.7.2:8080/professor/insert' ,{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
       
    body: JSON.stringify({ nome: nome }), // Convertendo o objeto JavaScript para JSON

    headers: headers

  }).then(response => {

    if(response.ok) {
      console.log('Foi no servidor e voltou');
      window.location.href = 'sucesso.html'    
    } else {
      console.log('Aconteceu algo que não foi possivel salvar');
      throw new Error('Erro ao tentar salvar');
    }

  })
  .catch(error => console.error('Erro!:', error));
   

}


