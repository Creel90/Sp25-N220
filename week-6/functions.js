function letsGo[] {
    console.log("FUNction Time!");
}

letsGo()

function calculateTotal(itemPrice, taxRate) {
    return itemPrice * (1 + taxRate)
}

console.log("Kidney = $20, Tax Rate = 40%:", calculateTotal(20, 0.4));

const items = [18, 24, 17, 3];

function showItems(){
    const newSection = document.createElement("section");
    newSection.innerHTML = "<h4>Items</h4>";

    let total = 0;
    for(let i = 0; i < items.length; i++){
        newSection.innerHTML += "<p>$" + items[i] + "</p>";
        total += items[i];
    }

    newSection.innerHTML += <hr />

    newSection.innerHTML += <

    document.body.appendChild(newSection);
}

showItems[];