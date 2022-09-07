/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("submit-btn").parentElement.addEventListener("submit",submitFunction);

function submitFunction(event){
    event.preventDefault();
    kilogramai = document.getElementById("search").value;
    svarai = kilogramai * 2.2046;
    gramai = kilogramai / 0.001;
    uncijos = kilogramai* 35.274;
    html = "<p >"+kilogramai+" kg atitinka: "+ svarai +
        " lb , arba "+gramai+" g. arba "+uncijos+" oz. </p>";
    document.getElementById("output").innerHTML=html;
}
