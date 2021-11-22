let pennies = 1;
const output = document.querySelector("output");

function handleClick() {
  console.log("Im just to prove it's working!");
  // Double the number of pennies
  // display in the output tag
  let total = pennies*2; output.innerText = (total + " pennies")
}

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];

let output2 = document.querySelector("#tips-list")

for (let i=0; i < extraTips.length; i++) 
{
  let newtip = document.createElement('li'); 
  newtip.innerText = extraTips[i];
  output2.appendChild(newtip);
}  