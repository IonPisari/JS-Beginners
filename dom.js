//1. Change Background project:
let array = ["yellow", "red", "green", "blue", "black", "orange", "pink"];
let changeColorBody = document.getElementById("container");
let button = document.getElementById("change-color").addEventListener('click', backGroundBody);
function backGroundBody() {
    let color = array[Math.floor(Math.random() * array.length)];
    // console.log(color);
    changeColorBody.style.backgroundColor = color ;
};




//2.Display Famous People Quotes:
let listOfAuthor = {
    _authorQuotes: [
        {
            firstName:'Mihai',
            lastName:'Eminescu',
            quotes:'Menirea vieții tale e să te cauți pe tine însuți.'
        },
        {
            firstName:'George',
            lastName:'Bacovia',
            quotes: 'Culegeți, voi, ce mai pot semăna gândurile mele.'

        },
        {
            firstName:'Nichita ',
            lastName:'Stănescu',
            quotes:'Sunt un om viu. Nimic din ce-i omenesc nu mi-e străin.'
        },
    ],
    get authorQuotes() {
        return this._authorQuotes
    }
}
// console.log(listOfAuthor.authorQuotes)
let author = document.getElementById("author")
let click = document.getElementById("random-author").addEventListener('click', displayAuthor);
function displayAuthor() {
    let arr = listOfAuthor.authorQuotes[Math.floor(Math.random() * listOfAuthor.authorQuotes.length)];
    // console.log(arr.firstName + " " + arr.lastName + " : " + arr.quotes);
    // let res = 
    document.getElementById("author").innerHTML = arr.firstName + " " + arr.lastName + " : " + arr.quotes
    // console.log(res)
};



//3. Counter project
const curentValue = document.getElementById("curentValue")
const incrementBtn = document.getElementById("plus")
const decrementBtn = document.getElementById("minus")
let counter = 3;
incrementBtn.addEventListener("click",function(){
    curentValue.innerHTML = counter;
    counter += 1;
});
decrementBtn.addEventListener("click",function(){
    curentValue.innerHTML = counter;
    counter -= 1;
    if(counter < 0 ) {
        return counter = 0, alert('Value should always be greater than zero')
    }
});








