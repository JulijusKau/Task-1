/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertingKilograms() {
  let kilogram = document.getElementById("search").value;
  let outputDiv = document.getElementById("output");

  outputDiv.style.fontSize = "30px";
  outputDiv.style.display = "flex";
  outputDiv.style.flexDirection = "column";
  outputDiv.style.gap = "20px";
  outputDiv.style.paddingLeft = "40%";

  if (isNaN(kilogram)) {
    return alert("Please, enter a number and don't use comma as separators");
  } else {
    let lbSpan = document.createElement("p");
    lbSpan.textContent = `${kilogram} kg = ${kilogram * 2.2046} lb`;
    outputDiv.append(lbSpan);

    let gSpan = document.createElement("p");
    gSpan.textContent = `${kilogram} kg = ${kilogram / 0.001} g`;
    outputDiv.append(gSpan);

    let ozSpan = document.createElement("p");
    ozSpan.textContent = `${kilogram} kg = ${kilogram * 35.274} oz`;
    outputDiv.append(ozSpan);
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  convertingKilograms();
});
