//var meuFormulario = document.getElementById("cadastro_professor");

//const meuFormulario = document.querySelector('.form');

// meuFormulario.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const formData = new FormData(meuFormulario);
//   console.log( formData );

//   capturarDados();
  
// });

// function capturarDados() {

//     let nomeProf = document.getElementById("nomeProf").value;
//     let idadeProf = Number(document.getElementById("idadeProf").value);

//   // dados a serem enviados pela solicitação POST
//   let _data = {
//     "nome": nomeProf
//     //idade: idadeProf
//   }

//   // let _data = {
//   //   nome: nomeProf,
//   //   idade: idadeProf
//   // }

//   // Verifica se os campos não estão vazios
//   if (!nomeProf || isNaN(idadeProf)) {
//       console.error("Nome ou idade estão inválidos");
//       return;
//   }

//   console.log("Aqui o _data " + _data);

//   let jsonData = JSON.stringify(_data);
//   console.log("Este é o jsonData " + jsonData);

  
//   chamarServidor(jsonData);
// }


//Funcionando perfeitamente deve ser trocado a senha token
//Funcionando perfeitamente deve ser trocado a senha token
//Funcionando perfeitamente deve ser trocado a senha token
//Funcionando perfeitamente deve ser trocado a senha token


//function chamarServidor(jsonData) {

function chamarServidor() {

  //console.log("Sending request to server with data:", jsonData);

  fetch('http://192.168.1.100:8080/professores/novo', {
      method: "POST",
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'include',
      //body: jsonData,

      body: JSON.stringify( { nome: 'Keyla' } ),

      //body: JSON.stringify( { username: 'user', password: 'Bearer ba097e8f-f318-42b0-97bb-ff361977e0fe' } ),

      //headers: {"Content-type": "application/json"}
      //headers: {"Content-type": "application/json; charset=UTF-8"}

      headers: {
        //'Authorization': 'Basic ba097e8f-f318-42b0-97bb-ff361977e0fe',
        'Access-Control-Allow-Origin': 'http://192.168.1.100:8080',
        'Access-Control-Allow-Credentials': 'true',        
        //'Content-Type': '[application/json, application/*+json]'
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json' 
      },



    })
        .then(response => {
                console.log("Response status:", response.status);
                if (!response.ok) {
                    return response.text().then(text => {
                        console.error("Response error text:", text);
                        throw new Error(text);
                    });
                }
                return response.json();
            })
            .then(data => { console.log("Response data:", data); })
            .catch(error => { console.error('Fetch error:', error); });
}


/*

function createTool(token, tool) {
  return fetch(`${url}/tools`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',u
      Authorization: token,
    }, 
    body: JSON.stringify(tool),
  })
    .then(async (response) => await response.json());
}
*/