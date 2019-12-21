import { DrawGrad } from "./DrawGrad";

function waitDomComplate() {
  console.log("[Entry] waitDomComplate");
  if (document.getElementById("0_0")) {
    startPlgin();
  } else {
    setTimeout(waitDomComplate, 1000);
  }
}

function startPlgin() {
  console.log("[Entry] startPlgin...");
  var toolbar = document.getElementsByClassName("toolbar")[0];
  var button = document.createElement("div");
  button.id = "button";
  button.style = "background: #FFF; width: 20px; height: 20px; margin: 20px;";
  toolbar.appendChild(button);
  button.addEventListener("mousedown", init);
}

function init() {
  console.log("[Entry] init...");
  const d = new DrawGrad();
  d.init();
}

console.log("entry init start...");
waitDomComplate();
