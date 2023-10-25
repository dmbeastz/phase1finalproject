//Access Key
const accesskey = "HuLYymNuMZ_DGABtlB5eg94a19uP1n6riYOmJXMp1Ew";
//DOM
const formEl = document.querySelector ("form");
const searchinput = document.getElementById ("search-input");
const searchResults = document.querySelector(".search-result");
const viewmore = document.getElementById ("view-more-button");

//Creating input data that can be stored
let inputData = ""
let page = 1;

//creating an asycn function for the page
async function searchImages () {
    inputData = inputEl.value;//holds the data for the input section
    const url = `https://api.unsplash.com/search/photos?page=${page}&query${inputData}&client_id=${accesskey}`//the  dynamic url

    const response = await fetch (url)
    const data = await response.json()

    const results = data.results

    if (page === 1){
        viewmore.style.display = "block"
    }

//Creating and Pushing all the data into the template created in the HTML ("div")
results.map ((result)=> {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add (".search-result");
    const image = document.getElementById ("img");
    image.src = result.urls.small;//Get the image
    image.alt = result.alt_description;//Get the description
    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;//Get the link for a spefic image
    imageLink.target = "_blank";
    image.textContent = result.alt_description;

    imageWrapper.appendChild (image);
    imageWrapper.appendChild (imageLink);
    imageWrapper.appendChild (imageWrapper);


});
page ++
if (page > 1){
    viewmore.style.display = "block"
}


formEl.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages
});
viewmore.addEventListener("click", () =>{
 searchImages
});
}