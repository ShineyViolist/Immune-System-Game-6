class Battle{
    constructor(virus){
        this.battlePanel = createSprite(800, (displayHeight - 200)/2,300,400);

        this.cellPanel = new Panel(this.battlePanel);
        this.cellPanel.hide();

        this.virusNa = virus;

        this.timer = 0;

        this.virus = loadImage("Images/Virus.png");
        this.virusCol = createSprite(-50,-50,50,50);
        this.virusCol.visible = false;

        this.text = createElement("h4");
        this.text.html("Intiate battle with " + this.virusNa + "?");
        this.text.position(750,((displayHeight - 300)/2));

        this.inButton = createButton('Intiate Battle');
        this.inButton.position(750,((displayHeight - 150)/2));

        this.entry = createSprite(800,(displayHeight + 100)/2,500,200);
        this.entry.shapeColor = "blue";
        //this.inButton.mousePressed(this.fight());
    }

    fight(){
        this.battlePanel.width = 500;
        this.battlePanel.height = 400;
        this.text.hide();
        this.inButton.hide();
        this.cellPanel.show();
        imageMode(CENTER);
        image(this.virus,800,(displayHeight - 400)/2,50,50);
        this.timer++;
        if(this.timer > 50){
            image(this.virus,800,(displayHeight - 400)/2,50,50);
        }
        this.virusCol.x = 800;
        this.virusCol.y = (displayHeight - 400)/2;
        gameState = "fight";
    }

    hide(){
        this.battlePanel.visible = false;
        this.text.hide();
        this.inButton.hide();
        this.entry.visible = false;
    }

    show(){
        this.battlePanel.visible = true;
        this.entry.visible = true;
        this.text.show();
        this.inButton.show();
    }

    update(){
        this.fight();
        this.cellPanel.update(this.entry);
            
    }
}