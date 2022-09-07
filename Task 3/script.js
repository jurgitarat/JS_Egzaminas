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
function showUsers(){
    html = "";
const ENDPOINT = 'https://api.github.com/users';
fetch(ENDPOINT)
    .then(result => result.json())
    .then((output) => {
        for (i=0; i< output.length; i++){
            console.log(output[i]);
            html += "<p>"+ output[i]["login"] + "</p> <img src ='"+ output[i]["avatar_url"] +"' alt='avataras'></img><hr>"
        }
        document.getElementById("output").innerHTML=html
        
}).catch(err => console.error(err));

}