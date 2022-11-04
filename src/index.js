import "./styles.css";
const contentBody = document.getElementById("content");
if (document.readyState !== "loading") {
  getDog();
  
} else {
  document.addEventListener("DOMContentLoaded", function () {
    getDog();
    
  });
}
async function getDog() {
  const url = "https://dog.ceo/api/breed/saluki/images/random"
  fetch(url)
  .then(response => response.json())
  .then((jsonDog)=>{
    console.log(jsonDog)
    console.log("test")
    initializeCode(jsonDog)
  })
    


}

function initializeCode(jsonDog) {
  //document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
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

  wikiText.innerText="testi"
  wikiImage.src = jsonDog

  
  wikiItem.appendChild(wikiHeader);
  wikiItem.appendChild(wikiContent);
  wikiItem.appendChild(wikiText)
  contentBody.appendChild(wikiItem);


  wikiContent.appendChild(wikiText)

  wikiContent.appendChild(imageDiv)
  imageDiv.appendChild(wikiImage)
  

  



}
