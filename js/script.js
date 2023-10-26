

// Creating input data that can be stored
let inputData = ""
let imagesearch = document.getElementById('imageresults')
// Access Key
const accesskey = "HuLYymNuMZ_DGABtlB5eg94a19uP1n6riYOmJXMp1Ew";
// //DOM
 const formEl = document.querySelector ("form");
const searchinput = document.getElementById ("search-input");
const searchResults = document.querySelector(".search-results");
const viewmore = document.getElementById ("view-more-button");

let page = 1;
// imagesearch.style='display:none'
 formEl.addEventListener('submit', (event) =>
 {
     event.preventDefault()
     searchImages(searchinput.value, page)
    // imagesearch.style.display = 'initial';
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

  

    // pictureData.forEach(pictureData => 
    // {
    //     let [{description,urls :{raw} }]=pictureData
    //     console.log(description)
    //     console.log(raw)
    // });
    // console.log(pictureData['results'][0]['urls']['regular'])
 
    
    // imagesearch.src =pictureData['results'][0]['urls']['regular']
    
    

    // results.innerHTML = {
        
    // }
    

            

                
  })

    // if (page === 1){
    //     viewmore.style.display = "block"
    // }

//Creating and Pushing all the data into the template created in the HTML ("div")
// results.map ((result)=> {
//     const imageWrapper = document.createElement('div');
//     imageWrapper.classList.add (".search-result");
//     const image = document.getElementById ("img");
//     image.src = results.urls.small;//Get the image
//     image.alt = results.alt_description;//Get the description
//     const imageLink = document.createElement("a");
//     imageLink.href = results.links.html;//Get the link for a spefic image
//     imageLink.target = "_blank";
//     image.textContent = result.alt_description;

//     imageWrapper.appendChild (image);
//     imageWrapper.appendChild (imageLink);
//     imageWrapper.appendChild (imageWrapper);


// });
// page ++
// if (page > 1){
//     viewmore.style.display = "block"
// }


formEl.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()
});
viewmore.addEventListener("click", () =>{
 searchImages
});
}