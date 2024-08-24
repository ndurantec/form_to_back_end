document.getElementById('cadastro_professor').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;

    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
   
    //fetch('http://192.168.1.100:8080/professores/novo', {
    fetch('http://10.47.4.163:8080/professores/novo', {    
        method: "POST",
        mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
        cache: "no-cache",
       
        body: JSON.stringify({ nome: nome }), // Convertendo o objeto JavaScript para JSON

        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        } else {
            console.log("Foi ao servidor e voltou com sucesso");
            window.location.href = 'sucesso.html'; // Redireciona para a página de sucesso
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
