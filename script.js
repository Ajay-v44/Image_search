const accessKey="AxA-F1khxXqw59HHL5u6KmmVHG84f--59JME8vQPIoI"

const formEl =  document.querySelector("form")
const inputEl= document.getElementById("search-input")
const searchResults =document.querySelector(".search-results")
const showMore=document.getElementById("show-more-button")


let inputData=""
let page=1;

async function serachImages(){
    inputData=inputEl.value ;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
   const response=await fetch(url)
   const data=await response.json()
}