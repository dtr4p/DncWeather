async function getInfosCep(){
    const cep = document.getElementById('cep').value;
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(response);
        document.getElementById('logradouro').innerHTML = data.logradouro;
        document.getElementById('bairro').innerHTML = data.bairro;
        document.getElementById('uf').innerHTML = data.uf;
    } catch(error){
        alert(`Não foi possível encontrar a informação desejada. Insira seu CEP sem carácteres especiais ('-', '+', '.'), conforme o exemplo: 12345678.`)
    }
}
async function getInfosWeather(){
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;
    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m&timezone=America%2FSao_Paulo&forecast_days=1`);
        const data = await response.json();
        console.log(response);
        const temperature = data.current.temperature_2m;
        document.getElementById('temperature').value = (`Previsão do tempo de acordo com a sua região: ${temperature}ºC`);
    } catch(error){
        alert(`Não foi possível encontrar a informação desejada. Insira a latitude e a longitude da sua localização. Não utilize ','.`)
    }
}