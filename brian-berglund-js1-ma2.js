//Question 1

const myFunctionExpression = function()  {
        console.log("Brian Berglund");
};

console.log(myFunctionExpression);


//Question 2

const button = document.querySelector("input");

function buttonClick(){
        console.log("I was clicked!");
}

button.addEventListener("click", buttonClick);

//Question 3

const key = document.querySelector("#firstName");

function keyEvent(event) {
      console.log("value: ", event.target.value)
}

key.addEventListener("keyup", keyEvent);

//Question 4

const mOver = document.querySelector("button");

function hovOver(){
      mOver.classList.add("hover");
      console.dir(mOver.classList);
}
mOver.addEventListener("mouseover", hovOver);

//Question 5

const mOut = document.querySelector("[data-animal='dog']");

function out(){
      mOut.classList.remove("hover");
      console.dir(mOut.classList);
}
mOut.addEventListener("mouseout", out);

//Question 6
const animal = document.querySelectorAll("li");

for (let i = 0; i < animal.length; i++){
        animal[i].addEventListener("mouseover", list);
}

function list(event){
      console.log(event.target.dataset.animal);
}

//Question 7

const animals = "cow";
switch(animals){
    case "cat":
    console.log("Meow");
    break;
    case "cow":
    console.log("Moo");
    break;
    case "bird":
    console.log("Tweet");
    break
    default:
      console.log("Harrumph")
}

//Question 8

const sheep = ["Malcolm", "Anders", "Marie"];
    sheep.forEach(function(sheep){
        console.log(sheep);
    });

//Question 9

function timeLog(){
      console.log("Hello!");

      if(counter === 6){
          clearInterval(intervalId);
      }
      counter++
}
let counter = 0
const intervalID = setInterval(timeLog, 500);


//Question 10
const container = document.querySelector(".container");

function textUpdate(){
      container.innerText = "Text updated!";
}

setTimeout(textUpdate, 2000);
