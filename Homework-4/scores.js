const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];

const scoreList = document.querySelector("ul");

const averageParagraph = document.getElementById("totalOfAllScores/NumberOfScores");

scoreList.innerHTML = "";

let total = 0;

for (let i = 0; i < scores.length; i++) {

    total += scores[i];

    const listItems = document.createElement("li");

    listItems.textContent = scores[i];

    scoreList.appendChild(listItems);
}

const averageScore = total / scores.length;

averageParagraph.textContent = averageScore