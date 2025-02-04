const itemsShelfPrice = 40.99;

const salesTax = .07;

const discountRate = .10;

let totalAfterTax = itemsShelfPrice * (1 + salesTax);

let qualifyForDiscount = itemsShelfPrice > 50;

let discountedTotalAfterTax = itemsShelfPrice * (1 + salesTax) * (1 - discountRate);

console.log("Total after tax:", totalAfterTax.toFixed(2));

console.log("Qualify for discount:", qualifyForDiscount);

console.log("Discounted total after tax:", discountedTotalAfterTax);

//I used const for the itemShelfPrice, salesTax, and discountRate as their values will not change.

//I used let for totalAfterTax, qualifyForDiscount, and discountedTotalAfterTax as they were going to be changed due to the mathmatical equations.

// I am struggling to make the discountedTotalAfterTax work. I have tried everything I can and it either says error or changes the totalAfterTax to the discountedTotalAfterTax even though the totalAfterTax does not qualify for the discount.