const menuList = document.getElementById("menu");
const cartTable = document.getElementById("cart");
const noItemsRow = document.getElementById("no-items");

const menuItems = [
    { name: "Hamburger", price: 2.99 },
    { name: "Cheeseburger", price: 3.99 },
    { name: "Cheese Pizza", price: 3.99 },
    { name: "Pepperoni Pizza", price: 4.99 },
    { name: "Sausage Pizza", price: 4.99 },
    { name: "Caesar Salad", price: 3.99 },
    { name: "Fries", price: 1.99 },
    { name: "Onion Rings", price: 2.49 }
];

let cart = [];

menuItems.forEach(item => {
    let listItem = document.createElement("li");

    let itemText = document.createElement("span");
    itemText.textContent = `${item.name} - $${item.price.toFixed(2)} `;
    listItem.appendChild(itemText);

    let specialInput = document.createElement("input");
    specialInput.type = "text";
    specialInput.placeholder = "Specia Request";
    specialInput.style.marginRight = "10px";
    listItem.appendChild(specialInput);

    let addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.addEventListener("click", function () {
       let specialRequest = specialInput.value.trim();
        cart.push({ ...item, specialRequest });
        updateCart();
        specialInput.value = "";
    });

    listItem.appendChild(addButton);
    menuList.appendChild(listItem);
});

function updateCart() {
    let rows = cartTable.querySelectorAll("tr:not(:first-child)");
    rows.forEach(row => row.remove());

    if (cart.length === 0) {
        noItemsRow.style.display = "table-row";
    } else {
        noItemsRow.style.display = "none";

        let total = 0;
        cart.forEach((item, index) => {
            let row = document.createElement("tr");

            let nameCell = document.createElement("td");
            nameCell.textContent = item.name;
            row.appendChild(nameCell);

            let priceCell = document.createElement("td");
            priceCell.textContent = `$${item.price.toFixed(2)}`;
            total += item.price;
            row.appendChild(priceCell);

            let specialRequest = document.createElement("td");
            let specialInput = document.createElement("textarea");
            specialInput.value = item.specialRequest;
            specialInput.addEventListener("input", function () {
                cart[index].specialRequest = this.value;
            });
            specialRequest.appendChild(specialInput);
            row.appendChild(specialRequest);

            let actionCell = document.createElement("td");
            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                cart.splice(index, 1);
                updateCart();
            });
            actionCell.appendChild(removeButton);
            row.appendChild(actionCell);

            cartTable.appendChild(row);
        });

        let totalRow = document.createElement("tr");
        let totalAmount = document.createElement("td");
        totalAmount.textContent = "Total";
        totalRow.appendChild(totalAmount);

        let totalValue = document.createElement("td");
        totalValue.setAttribute("colspan", "3");
        totalValue.textContent = `$${total.toFixed(2)}`;
        totalRow.appendChild(totalValue);

        cartTable.appendChild(totalRow);
    }
}

updateCart();
