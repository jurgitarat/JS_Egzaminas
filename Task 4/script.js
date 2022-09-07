/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
    .then(result => result.json())
    .then((output) => {
        for (i=0; i< output.length; i++){
            card = document.createElement("div");
            brand = document.createElement("h3");
            brand.innerText=output[i]["brand"];
            card.append(brand);
            output[i]["models"].forEach(modelis => {
                model=document.createElement("p");
                model.innerText=modelis;
                card.append(model);
            });
            document.getElementById("output").append(card);
           }
}).catch(err => console.error(err));