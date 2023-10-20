import './projects/pay-me/typescript';
import "./main.css";


const userValue:HTMLInputElement = document.querySelector(".firstInput")!;
const cardsValue:HTMLInputElement = document.querySelector(".secondInput")!;
const cardError:HTMLParagraphElement = document.querySelector(".error")!;
const userError:HTMLParagraphElement = document.querySelector(".error1")!;
const btn: HTMLButtonElement = document.querySelector(".btn")!;

btn.addEventListener("click", () => {
if(userValue.value !== "") {

 userValue.value = "";
} else {
 userError.style.display = "block";
 userError.innerText = "Please enter number";
 userError.style.color = "red";

 setTimeout(() => {
  userError.style.display = "none";
}, 3000);
}
if(cardsValue.value === "") {
 cardError.innerText = "Please enter number";
 cardError.style.color = "red";
 setTimeout(() => {
   cardError.style.display = "none";
 }, 3000);
} else {
 cardsValue.value = "333";
}
});