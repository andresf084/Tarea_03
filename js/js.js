function dataSchool() {
    fetch('data.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
        })
        
}

dataSchool()