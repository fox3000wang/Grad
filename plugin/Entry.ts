import DrawGrad from "./DrawGrad";

class Entry {
  waitDomComplate = () => {
    console.log("[Entry] waitDomComplate");
    if (document.getElementById("0_0")) {
      this.startPlgin();
    } else {
      setTimeout(this.waitDomComplate, 1000);
    }
  };

  startPlgin = () => {
    console.log("[Entry] startPlgin...");
    const toolbar = document.getElementsByClassName("toolbar")[0];
    const button = document.createElement("div");
    button.id = "button";
    button.style = "background: #FFF; width: 20px; height: 20px; margin: 20px;";
    toolbar.appendChild(button);
    button.addEventListener("mousedown", this.init);
  };

  init = () => {
    console.log("[Entry] init...");
    const d = new DrawGrad();
    d.init();
  };
}

console.log("entry init start...");
const e = new Entry();
e.waitDomComplate();
