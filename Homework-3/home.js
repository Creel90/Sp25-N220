const radius = 5; //I chose const becuase it cannot be reassigned or redecaalared and since we know the radius is 5 we want it to stay that way.

let area = Math.PI * Math.pow(5,2); //I chose let because it can be reassigned or redeclared and since we are wanting the area and perimeter to provide an answer to our equation. I used Math.PI because we needed to take PI times radius to the 2nd power. And I used Math.pow through w3 schools to get r^2 to work.

let perimeter = 2 * Math.PI * radius; //Same reason I chose let for area is the reason I chose let here for the perimeter.

console.log("The area of the circle is:", area);

console.log("The perimeter of the circle is:", perimeter);