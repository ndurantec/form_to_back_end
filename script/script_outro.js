const URL = 'http://192.168.1.100:8080/professores';

async function lista() {
    const resp = await fetch(URL);
    
    if(resp.status === 200) {
        const obj = await resp.json();
        console.log(obj);
    }
}