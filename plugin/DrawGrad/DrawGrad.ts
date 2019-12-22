export default class DrawGrad {
  BROAD: number = 2;
  gridNum: number = 3;
  sX: number = 0;
  sY: number = 0;
  eX: number = 0;
  eY: number = 0;
  canvasWidth: number = 0;
  canvasHeight: number = 0;
  isInit: boolean = false;
  canvas: any = null;

  constructor(canvas: any) {
    this.canvas = canvas;
  }

  addGrid = () => {
    this.gridNum++;
    this.clean();
    this.drawYellowGrid();
  };

  decGrid = () => {
    this.gridNum = this.gridNum > 2 ? this.gridNum - 1 : this.gridNum;
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
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  };

  mousemoveHandler = target => {
    this.clean();
    this.eX = target.offsetX;
    this.eY = target.offsetY;
    this.drawGreenGrid();
  };

  mousedownHandler = target => {
    this.drawing();
    this.sX = target.offsetX;
    this.sY = target.offsetY;
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

    const w = (this.eX - this.sX) / this.gridNum;
    const h = (this.eY - this.sY) / this.gridNum;

    for (let i = 0; i <= this.gridNum; i++) {
      ctx.fillRect(this.sX + w * i, this.sY, this.BROAD, this.eY - this.sY + 1);
      ctx.fillRect(this.sX, this.sY + h * i, this.eX - this.sX + 1, this.BROAD);
    }
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
    ctx.arc(this.eX, this.eY, 8, 0, Math.PI * 2, true);
    ctx.arc(this.eX, this.eY, 7, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();

    const w = (this.eX - this.sX) / this.gridNum;
    const h = (this.eY - this.sY) / this.gridNum;

    for (let i = 0; i <= this.gridNum; i++) {
      ctx.fillRect(this.sX + w * i, this.sY, this.BROAD, this.eY - this.sY + 1);
      ctx.fillRect(this.sX, this.sY + h * i, this.eX - this.sX + 1, this.BROAD);
    }
  };
}
