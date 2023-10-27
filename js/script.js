//Searching for images
// Creating input data that can be stored
let inputData = ""
let imagesearch = document.getElementById('imageresults')
// Access Key
const accesskey = "HuLYymNuMZ_DGABtlB5eg94a19uP1n6riYOmJXMp1Ew";
// //DOM
 const formEl = document.querySelector ("form");
const searchinput = document.getElementById ("search-input");
const searchResults = document.querySelector(".search-results");
const homepagesimages = document.getElementById ("homeimages");
const homedescription = document.getElementById("description");
let page = 1;


 formEl.addEventListener('submit', (event) =>
 {
     event.preventDefault()
     searchImages(searchinput.value, page)
    
 })

 function searchImages(inputValue, page)
{

 fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accesskey}`)
 .then(response => response.json())
.then(pictureData => 
 {
    let {results}=pictureData

    results.forEach(result => 
    {
        let {alt_description,urls:{regular}}=result

        let searchResult=document.createElement("div")
        searchResult.setAttribute("class","search-result")

        searchResult.innerHTML=
        `
        <img id ="imageresults" src="${regular}" alt="${alt_description}">
        <p>${alt_description}</p> 
        `
        console.log(searchResult)
        searchResults.appendChild(searchResult)

    });
})


formEl.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()
});

}