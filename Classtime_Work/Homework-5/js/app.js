const h1Ref = document.getElementById("titles");

console.log("h1Ref:", h1Ref);

const letterGradeRefs = document.getElementsByClassName("letter-grade");
console.log("letterGradeRefs:", letterGradeRefs);

const pRef = document.querySelector("p");

console.log("pRef:", pRef);

const h1AltRef = document.querySelector("#title");

console.log("h1AltRef:", h1AltRef);

const liRefs = document.querySelectorAll("li");

console.log("liRefs:", liRefs);

const ulRef = document.querySelector("ul");

console.log("ul textContent", ulRef.textContent); //


console.log("ul innerText", ulRef.innerText); // 

console.log("ul innerHTML", ulRef.innerHTML); //

pRef.innerText = "The crazy old farmer ate the little green rock.";

ulRef.innerHTML = "<li class='Letter-grade'>C</li>";

h1Ref.style.backgroundColor = "red";

pRef.style.backgroundColor = "00ff00"
pRef.style.color ="rgba(225, 50, 0, 1)";
pRef.style.height ="400px";
pRef.style.width = "400px";

h1Ref.document.querySelector("li").style.display = "none";

const googleLinkRef = document.querySelector("a.google");

googleLinkRef.href = "https.google.com"
googleLinkRef.target = "_blank";

pRef.classList.add("blue");

pRef.classList.remove("blue");

const newli = document.createElement("li");
newLi.innerText = "G";
newLi.classList.add("letter-grade");

//toggle is only used if you want to toggle.
//Ref is for single, Refs is for multiple lists
