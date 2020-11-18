let animalsToAddopt = [
  { animal: "dog", name: "Zira" },
  { animal: "dog", name: "Atxa" },
  { animal: "cat", name: "Mixi" },
  { animal: "cat", name: "Poli" },
];

function addAnimals() {
  let nameToAdd = document.getElementById("nameInput").value;
  let animalNodeList = document.getElementsByName("animal");
  let animalToAdd = Array.from(animalNodeList).filter(
    (animal) => animal.checked === true
  )[0].value;
  let animal = {
    animal: animalToAdd,
    name: nameToAdd,
  };
  animalsToAddopt.push(animal);
  showList();
}

function showList() {
  let list = document.getElementById("animalList");
  list.innerHTML = "";
  animalsToAddopt.forEach(function (data) {
    let linew = document.createElement("li");
    let content = document.createTextNode(data.animal + " " + data.name);
    list.appendChild(linew);
    linew.appendChild(content);
  });
}
showList();

document
  .getElementById("addAnimalButton")
  .addEventListener("click", addAnimals);
