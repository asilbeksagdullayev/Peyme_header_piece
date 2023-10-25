import './projects/pay-me/typescript';
import "./main.css";

const userValue: HTMLInputElement = document.querySelector(".firstInput")!;
const cardsValue: HTMLInputElement = document.querySelector(".secondInput")!;
const cardError: HTMLParagraphElement = document.querySelector(".error")!;
const userError: HTMLParagraphElement = document.querySelector(".error1")!;
const btn: HTMLButtonElement = document.querySelector(".btn")!;
const first_page: HTMLDivElement = document.querySelector(".first_page")!;

btn.addEventListener("click", () => {
  if (userValue.value !== "") {
    first_page.style.display = "none";
    // create_container()
  }
});

// create_container();