// Functionize Minecraft Fishing Start Code

// Fish Count Variable
var numCod = 0;
var numSalmon = 0;
var numTropical = 0;
var numPuff = 0;

// Fish Button Event Listener
document.getElementById("character-select").addEventListener("change", reset);
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
document.getElementById("five").addEventListener("click", five);
document.getElementById("until").addEventListener("click", until);
document.getElementById("specific").addEventListener("change", specify);
document.getElementById("sort").addEventListener("click", sort);

function reset() {
  document.getElementById("inv").innerHTML = "";
  numCod = 0;
  numSalmon = 0;
  numTropical = 0;
  numPuff = 0;
  document.getElementById("num-cod").innerHTML = 0;
  document.getElementById("num-salmon").innerHTML = 0;
  document.getElementById("num-tropical").innerHTML = 0;
  document.getElementById("num-puffer").innerHTML = 0;
}

function sort() {
  var i = 0;
  document.getElementById("inv").innerHTML = "";
  while (i < numCod) {
    document.getElementById("inv").innerHTML +=
      "<img class='fishinv' src='img/Raw-Cod.png'>";
    i++;
  }
  i = 0;
  while (i < numSalmon) {
    document.getElementById("inv").innerHTML +=
      "<img class='fishinv' src='img/Raw-Salmon.png'>";
    i++;
  }
  i = 0;
  while (i < numTropical) {
    document.getElementById("inv").innerHTML +=
      "<img class='fishinv' src='img/Tropical-Fish.png'>";
    i++;
  }
  i = 0;
  while (i < numPuff) {
    document.getElementById("inv").innerHTML +=
      "<img class='fishinv' src='img/Pufferfish.png'>";
    i++;
  }
}

function specify() {
  let num = document.getElementById("specific").value;
  for (let i = 0; i < num; i++) {
    fish();
  }
}

function five() {
  for (let i = 0; i <= 4; i++) {
    fish();
  }
}

function until() {
  while (numCod < 200) {
    fish();
  }
}

function fish() {
  var char = document.getElementById("character-select").value;
  var rand = Math.random();
  console.log(rand);
  if (char === "steve") {
    // Steve Fishing Simulator
    if (rand < 0.7) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Raw-Cod.png'>";
    } else if (rand < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Raw-Salmon.png'>";
    } else if (rand < 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Tropical-Fish.png'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuff++;
      document.getElementById("num-puffer").innerHTML = numPuff;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Pufferfish.png'>";
    }
  } else if (char === "alex") {
    // Alex Fishing Simulator
    if (rand < 0.1) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Raw-Cod.png'>";
    } else if (rand < 0.2) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Raw-Salmon.png'>";
    } else if (rand < 0.5) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Tropical-Fish.png'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuff++;
      document.getElementById("num-puffer").innerHTML = numPuff;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Pufferfish.png'>";
    }
  } else {
    // Villager Fishing Simulator
    if (rand < 0.25) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Raw-Cod.png'>";
    } else if (rand < 0.5) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Raw-Salmon.png'>";
    } else if (rand < 0.75) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Tropical-Fish.png'>";
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuff++;
      document.getElementById("num-puffer").innerHTML = numPuff;
      document.getElementById("inv").innerHTML +=
        "<img class='fishinv' src='img/Pufferfish.png'>";
    }
  }
}

function fishBtnClicked() {
  fish();
}
