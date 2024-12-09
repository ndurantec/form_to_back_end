const meuFormulario = document.querySelector('.form');

meuFormulario.addEventListener("submit", function(event) {
   event.preventDefault();

   const formData = new FormData(meuFormulario);
   
   //const data = Object.fromEntries(formData);

   const data = document.getElementById("nome").value;
   
   console.log( data );

   console.log( JSON.stringify(data) );
   
   fetch('http://192.168.1.100:8080/professores/novo', {
        method: "POST",
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        
        // headers: {            
        //     'Access-Control-Allow-Origin': 'http://192.168.1.100:8080',
        //     //'Access-Control-Allow-Credentials': 'true',                    
        //     'Content-type': 'application/json; charset=UTF-8',
        //     'Accept': 'application/json'
        // },
          
        headers: {            
            'Content-Type': 'application/json', // Cabeçalho correto para JSON
            'Accept': 'application/json'
        },


          body: JSON.stringify( { nome: data } )

    
    });

 });



// const data = "João"; // Exemplo de valor para 'data'
// const xhr = new XMLHttpRequest();
// xhr.open("POST", "http://192.168.1.100:8080/professores/novo", true);
// xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xhr.setRequestHeader("Accept", "application/json");
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// };
// xhr.send(JSON.stringify({ nome: data }));
