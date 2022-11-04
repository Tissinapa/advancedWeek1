import "./styles.css";
const contentBody = document.getElementById("body");
if (document.readyState !== "loading") {
  getDog();

  
} else {
  document.addEventListener("DOMContentLoaded", function () {
    getDog();

    

  });
}

async function getDog() {
  let dogsUrls = [
    
    "https://dog.ceo/api/breed/saluki/images/random",
    
    "https://dog.ceo/api/breed/african/images/random",
    
    "https://dog.ceo/api/breed/borzoi/images/random",
    
    "https://dog.ceo/api/breed/pembroke/images/random",
    
    "https://dog.ceo/api/breed/havanese/images/random",
    
    "https://dog.ceo/api/breed/whippet/images/random"
  ]
  let dognames =["Saluki","African","Borzoi","Pembroke","Havanese","Whippet"]

  //const url = "https://dog.ceo/api/breed/saluki/images/random"
  //console.log(dogsUrls[0].name , dogsUrls[0].url)
  let requests = await Promise.all((dogsUrls.map((url)=> fetch(url)
    .then((res)=> res.json()))))
    console.log(requests)
    for(let i=0; i<= requests.length; i++){
      initializeCode(requests[i].message,dognames[i])
    }
  
  //Promise.all(requests)
  //  .then(responses => responses.forEach(response => initializeCode(response)));
    //console.log(response)
/*   fetch(url)
    .then(response => response.json())
    .then((jsonDog)=>{
      console.log(jsonDog)
    //const getImage = jsonDog.map(element => elements.message)
      console.log("test")
      initializeCode(jsonDog) */
  }
  


function initializeCode(jsonDog,names){
  const wikiContainer = document.createElement("div")
  wikiContainer.className = "container"

  const wikiItem = document.createElement("div")
  wikiItem.className = "wiki-item"
  
  const wikiHeader = document.createElement("h1")
  wikiHeader.className = "wiki-header"

  const wikiContent = document.createElement("div")
  wikiContent.className = "wiki-content"

  const wikiText = document.createElement("p")
  wikiText.className = "wiki-text"

  const imageDiv = document.createElement("div")
  imageDiv.className = "img-container"

  const wikiImage = document.createElement("img")
  wikiImage.className = "wiki-img"

  wikiText.innerText=names
  
  wikiImage.src = jsonDog

  
  wikiItem.appendChild(wikiHeader);
  wikiItem.appendChild(wikiContent);
  wikiItem.appendChild(wikiText)
  wikiContainer.appendChild(wikiItem);
  contentBody.appendChild(wikiContainer)

  wikiContent.appendChild(wikiText)
  wikiContent.appendChild(imageDiv)
  imageDiv.appendChild(wikiImage)


  //wikiContainer.appendChild(wiki)

}

