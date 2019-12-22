import DrawGrad from "./DrawGrad";
import Grad from "./Grad";

/**
 * 这里只负责管理业务逻辑不负责具体绘图功能
 * 只要通过model层的数据，传给GrawGrad的功能层
 * 就可以还原整个画面
 */
export default class DrawGradController {
  private CANVAS_ID = "draw_grad_canvas";
  private drawGrad: DrawGrad;
  private grad: Grad;

  init = () => {
    console.log("[DrawGradController] init.");
    if (document.getElementById(this.CANVAS_ID)) {
      return;
    }
    this.grad = this.grad ? this.grad : new Grad();
    const canvas = this.getAndModifyDOM();
    this.drawGrad = this.drawGrad ? this.drawGrad : new DrawGrad(canvas);
    this.resize();
    this.drawGrad.startDraw();
  };

  getAndModifyDOM = () => {
    let div: any = document.getElementById("0_0");
    const canvas = document.createElement("canvas");
    canvas.id = this.CANVAS_ID;
    div.appendChild(canvas);
    return canvas;
  };

  // TODO: add stage resize lintener
  resize = () => {
    const pic: any = document.getElementsByClassName("cornerstone-canvas")[0];
    this.grad.canvasWidth = pic.width;
    this.grad.canvasHeight = pic.height;
    this.drawGrad.canvas.style = "position: absolute; top:0; left:0";
    this.drawGrad.setGrad(this.grad);
  };
}
