function getjson(){
    var jsonf = fetch('./prices.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Aqui você pode manipular os dados como quiser
    })
    .catch(error => {
        console.error('Houve um problema com a operação fetch:', error);
    });
}

function calcular(){
    var milhas = document.getElementById('milhas')
    var jsonf = getjson()

    //var obj = JSON.parse(jsonf)
    console.log(typeof(jsonf))
}
