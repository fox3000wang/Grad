import Grad from "./Grad";

export default class DrawGrad {
  private grad: Grad = null;
  canvas: any = null;

  constructor(canvas: any) {
    this.canvas = canvas;
  }

  setGrad = (grad: Grad) => {
    this.grad = grad;
    this.canvas.width = grad.canvasWidth;
    this.canvas.height = grad.canvasWidth;
  };

  addGrid = () => {
    this.grad.gridNum++;
    this.clean();
    this.drawYellowGrid();
  };

  decGrid = () => {
    this.grad.gridNum =
      this.grad.gridNum > 2 ? this.grad.gridNum - 1 : this.grad.gridNum;
    this.clean();
    this.drawYellowGrid();
  };

  startDraw = () => {
    this.canvas.addEventListener("mousedown", this.mousedownHandler);
    this.canvas.focus();
  };

  stopDraw = () => {
    this.canvas.removeEventListener("mousedown", this.mousedownHandler);
  };

  drawing = () => {
    this.canvas.addEventListener("mousemove", this.mousemoveHandler);
  };

  clean = () => {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.grad.canvasWidth, this.grad.canvasHeight);
  };

  mousemoveHandler = (target: MouseEvent) => {
    this.clean();
    this.grad.eX = target.offsetX;
    this.grad.eY = target.offsetY;
    this.drawGreenGrid();
  };

  mousedownHandler = (target: MouseEvent) => {
    this.drawing();
    this.grad.sX = target.offsetX;
    this.grad.sY = target.offsetY;
    this.canvas.addEventListener("mouseup", this.mouseupHandler);
  };

  mouseupHandler = () => {
    this.clean();
    this.canvas.removeEventListener("mousemove", this.mousemoveHandler);
    this.drawYellowGrid();
    this.stopDraw();
  };

  /**
   * 鼠标弹起生成黄色网格
   */
  drawYellowGrid = () => {
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";

    this.drawLines(ctx);
  };

  /**
   * 移动鼠标绘制绿色网格
   */
  drawGreenGrid = () => {
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "#00AA00";
    ctx.strokeStyle = "#00AA00";

    // 这里是画鼠标上面的圆圈
    ctx.beginPath();
    ctx.arc(this.grad.eX, this.grad.eY, 8, 0, Math.PI * 2, true);
    ctx.arc(this.grad.eX, this.grad.eY, 7, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();

    this.drawLines(ctx);
  };

  drawLines = (ctx: any) => {
    const w = (this.grad.eX - this.grad.sX) / this.grad.gridNum;
    const h = (this.grad.eY - this.grad.sY) / this.grad.gridNum;
    for (let i = 0; i <= this.grad.gridNum; i++) {
      ctx.fillRect(
        this.grad.sX + w * i,
        this.grad.sY,
        this.grad.broad,
        this.grad.eY - this.grad.sY + 1
      );
      ctx.fillRect(
        this.grad.sX,
        this.grad.sY + h * i,
        this.grad.eX - this.grad.sX + 1,
        this.grad.broad
      );
    }
  };
}
