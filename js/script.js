

// Creating input data that can be stored
let inputData = ""

// Access Key
const accesskey = "HuLYymNuMZ_DGABtlB5eg94a19uP1n6riYOmJXMp1Ew";
// //DOM
 const formEl = document.querySelector ("form");
const searchinput = document.getElementById ("search-input");
const searchResults = document.querySelector(".search-result");
const viewmore = document.getElementById ("view-more-button");

let page = 1;

 formEl.addEventListener('submit', (event) =>
 {
     event.preventDefault()
     searchImages(searchinput.value, page)
 })

 function searchImages(inputValue, page)
{
  console.log(inputValue)
 console.log(page)
console.log(accesskey)

 fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accesskey}`)
 .then(response => response.json())
.then(pictureData => 
 {
    console.log(pictureData['results'][0]['urls']['regular'])

    let imagesearch = document.getElementById('imageresults')
    imagesearch.src =pictureData['results'][0]['urls']['regular']
    //searchResults.appendChild(imagesearch)
    

    result.innerHTML = {
        
    }
    

            

                
  })

    if (page === 1){
        viewmore.style.display = "block"
    }

//Creating and Pushing all the data into the template created in the HTML ("div")
results.map ((result)=> {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add (".search-result");
    const image = document.getElementById ("img");
    image.src = results.urls.small;//Get the image
    image.alt = results.alt_description;//Get the description
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
    searchImages()
});
viewmore.addEventListener("click", () =>{
 searchImages
});
}