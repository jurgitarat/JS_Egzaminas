/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
document.getElementById("btn").addEventListener("click", showUsers);
const ENDPOINT = 'https://api.github.com/users';

function showUsers() {
    document.getElementById("output").innerHTML = "";
    fetch(ENDPOINT)
        .then(result => result.json())
        .then((output) => {
            for (i = 0; i < output.length; i++) {
                card = document.createElement("div");
                login = document.createElement("h2");
                login.innerText = output[i]["login"];
                avatar  = document.createElement("img");
                avatar.src=output[i]["avatar_url"];
                card.append (login, avatar);
                document.getElementById("output").append(card);
            }
        }).catch(err => console.error(err));

}