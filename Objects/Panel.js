class Panel{
    constructor(battlePanel){
        this.panel1 = createSprite(300, (displayHeight - 200)/2, 500, 400);
        this.panel1.shapeColor = "red";
        this.index = 0;
        this.battlePanel = battlePanel;
        this.object = [];
        for(var i = 150; i >= -200; i = i - 100){
            this.object[this.index] = new Cell(this.panel1,i,"Macrophage");
            this.index++;
        }
        //console.log(this.object[3].display);
    }

    update(entry){
        //console.log(virus);
        for(var j = 0; j < this.object.length; j++){
            //console.log(this + "Here");
            this.object[j].pressedOver();
            //console.log(j);
            this.release(entry);
        }
    }

    release(entry){
        for(var j = 0; j < this.object.length; j++){ 
            this.object[j].letGo(entry);
            //console.log(this.object[j].cellState);
        }
    }

    hide(){
        this.panel1.visible = false;
        for(var j = 0; j < this.object.length; j++){
            //console.log(this + "Here");
            this.object[j].cell.visible = false;
            this.object[j].display.visible = false;
            //console.log(j);
        }
    }

    show(){
        this.panel1.visible = true;
        for(var j = 0; j < this.object.length; j++){
            //console.log(this + "Here");
            this.object[j].cell.visible = true;
            this.object[j].display.visible = true;
            //console.log(j);
        }
    }
}