const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxaphone", "Flute"];

const instrumentList = document.querySelector("ul");

for (let i = 0; i < instruments.length; i++) {

    const listItems = document.createElement("li");
    
    listItems.textContent = instruments[i];
    
    instrumentList.appendChild(listItems);
}