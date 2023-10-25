//Testing to seeing if the api server 

fetch("https://api.unsplash.com/search/photos") 
.then(res => {
    if (res.ok) {
        console.log ("successful")
    }
   
else {console.log ("Not successful")}
res.json()})
.then (data =>console.log (data))
.catch (error =>console.log ('ERROR'));

//Access Key
const accessskey = 'HuLYymNuMZ_DGABtlB5eg94a19uP1n6riYOmJXMp1Ew';

const formEl = document.querySelector ("form");
const searchinput = document.getElementById ("search-input");


