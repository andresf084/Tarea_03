/*function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'data.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let dataSchool = JSON.parse(this.responseText);
            console.log(dataSchool)
        }
    }
}

getData()*/


/*function getData2 () {
    fetch('data.json')
    .then(respuesta => respuesta.json)
    .then(respuesta => console.log(respuesta))
}

getData2()*/


function getData3 () {
    var dataSchool2 = JSON.parse(data.json)
    console.log(dataSchool2)
}

getData3()