import { Polygon } from "./polygon.js";

class App{
    constructor(){
        this.canvas = document.querySelector("#pallete");
        this.ctx = this.canvas.getContext("2d");

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.isDown = false;
        this.moveX = 0;
        this.offsetX = 0;

        this.canvas.addEventListener('pointerdown', this.onDown.bind(this), false);
        this.canvas.addEventListener('pointermove', this.onMove.bind(this), false);
        this.canvas.addEventListener('pointerup', this.onUp.bind(this), false);

        this.canvas.addEventListener("click", this.coloring.bind(this), false);
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth/2.5;
        this.stageHeight = document.body.clientHeight/1.4;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.polygon = new Polygon(
            this.stageWidth/4,
            this.stageHeight/4,
            this.stageWidth/8,
            12,
            this.stageWidth/12
        )
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);


        this.moveX *= 0.92;
        this.polygon.animate(this.ctx, this.moveX);
    }

    coloring(event){
        var x = event.layerX;
        var y = event.layerY;
        var pixel = this.ctx.getImageData(x, y, 1, 1);
        var data = pixel.data;
        var rgba = 'rgba(' + data[0] + ', ' + data[1] +
          ', ' + data[2] + ', ' + (data[3] / 255) + ')';
        
        if(rgba==='rgba(0, 0, 0, 0)')
            rgba = 'rgba(0,0,0.1)'
        
        document.body.style.backgroundColor = rgba;
        localStorage.setItem("bcolor", rgba);
    }

    onDown(e){
        this.isDown = true;
        this.moveX = 0;
        this.offsetX = e.clientX;
    }

    onMove(e){
        if(this.isDown){
            this.moveX = e.clientX - this.offsetX;
            this.offsetX = e.clientX;
        }
    }

    onUp(e){
        this.isDown = false;
    }
}

window.onload=()=>{
    new App();
}