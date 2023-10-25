//Testing to seeing if the api server 

fetch("") 
.then(res => {
    
    if (res.ok) {
        console.log ("successful")
    }
   
else {console.log ("Not successful")}
res.json()})
.then (data =>console.log (data))
.catch (error =>console.log ('ERROR'));

//DOM 
