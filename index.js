

let animalsToAddopt = [
    { animal : "dog", name : "Zira",},
    { animal : "dog", name : "Atxa",},
    { animal : "cat", name : "Mixi",},
    { animal : "cat", name : "Poli",}
];


function showList(){
    let list = document.getElementById("animalList");
    animalsToAddopt.forEach(function(data){
        let linew = document.createElement("li");
        let content = document.createTextNode(data.animal + " " + data.name);
        list.appendChild(linew);
        linew.appendChild(content);
    })
}
showList();

function addAnimals (animal, name) {
    let nameToAdd = document.getElementById("nameIput").value;
}


