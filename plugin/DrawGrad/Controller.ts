import DrawGrad from "./DrawGrad";

export default class DrawGradController {
  private CANVAS_ID = "draw_grad_canvas";
  private grad: DrawGrad;

  init = () => {
    console.log("[DrawGradController] init.");
    if (document.getElementById(this.CANVAS_ID)) {
      return;
    }
    this.modifyDOM();
    this.resize();
    this.grad.startDraw();
  };

  modifyDOM = () => {
    let div: any = document.getElementById("0_0");
    const canvas = document.createElement("canvas");
    canvas.id = this.CANVAS_ID;
    div.appendChild(canvas);
    this.grad = this.grad ? this.grad : new DrawGrad(canvas);
  };

  // TODO: add stage resize lintener
  resize = () => {
    const pic: any = document.getElementsByClassName("cornerstone-canvas")[0];
    this.grad.canvasWidth = this.grad.canvas.width = pic.width;
    this.grad.canvasHeight = this.grad.canvas.height = pic.height;
    this.grad.canvas.style = "position: absolute; top:0; left:0";
  };
}
