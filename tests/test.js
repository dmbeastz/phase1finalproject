//Access Key
const accesskey = "40275010-873b364c3619ae2e7a99082c1";
//DOM
const formEl = document.querySelector ("form");
const searchinput = document.getElementById ("search-input");
const searchResults = document.querySelector(".search-result");
const viewmore = document.getElementById ("view-more-button");
































// //Creating input data that can be stored
// let inputData = ""


// //creating an asycn function for the page
// async function searchImages () {
//     inputData = inputEl.value;//holds the data for the input section
//     const url = `https://pixabay.com/api/?key=40275010-873b364c3619ae2e7a99082c1&q=${inputData}&image_type=photo`//the  dynamic url

//     const response = await fetch (url)
//     const data = await response.json()

//     const results = data.results
//     }

// //Creating and Pushing all the data into the template created in the HTML ("div")
// results.map ((result)=> {
//     const imageWrapper = document.createElement('div');
//     imageWrapper.classList.add ("search-result");
//     const image = document.getElementById ("img");
//     image.src = result.urls.small;//Get the image
//     image.alt = result.alt_description;//Get the description
//     const imageLink = document.createElement("a");
//     imageLink.href = results.links.html;//Get the link for a spefic image
//     imageLink.target = "_blank";
//     image.textContent = result.alt_description;

//     imageWrapper.appendChild (image);
//     imageWrapper.appendChild (imageLink);
//     imageWrapper.appendChild (imageWrapper);


// });

// formEl.addEventListener("submit", (event) =>{
//     event.preventDefault()
//     page = 1;
//     searchImages
// });
// viewmore.addEventListener("click", () =>{
//  searchImages
// });
