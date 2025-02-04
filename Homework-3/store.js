const itemsShelfPrice = 40.99; //I chose const as it cannot be reassigned or redeclared.

const salesTax = .07 //Same reason I chose const for the itemShelfPrice

const discountRate = .10 //Same reason I chose const for the itemsShelfPrice.

let totalAfterTax = itemsShelfPrice * (1 + salesTax);

let qualifyForDiscount = itemsShelfPrice > 50; //Used this to generate the Boolean value: true or false

let dicountedTotalAfterTax = itemsShelfPrice * (1 + salesTax) * (1 - discountRate);
    if (qualifyForDiscount = false) {dicountedTotalAfterTax = totalAfterTax};

console.log("Total after tax:", totalAfterTax.toFixed(2));

console.log("Qualify for discount:", qualifyForDiscount);

console.log("Discounted total after tax:", dicountedTotalAfterTax);