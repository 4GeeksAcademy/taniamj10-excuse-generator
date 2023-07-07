/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let who1 = Math.floor(Math.random() * who.length);
  let action1 = Math.floor(Math.random() * action.length);
  let what1 = Math.floor(Math.random() * what.length);
  let when1 = Math.floor(Math.random() * when.length);
  return who[who1] + action[action1] + what[what1] + when[when1];
};
