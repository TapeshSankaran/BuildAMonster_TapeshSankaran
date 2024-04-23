class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.rlegX = this.bodyX + 50;
        this.rlegY = this.bodyY + 120;

        this.llegX = this.bodyX - 50;
        this.llegY = this.bodyY + 120;
        
        this.larmX = this.bodyX - 75;
        this.larmY = this.bodyY;
        
        this.rarmX = this.bodyX + 75;
        this.rarmY = this.bodyY;
        
        this.headX = this.bodyX;
        this.headY = this.bodyY - 150;
        
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY - 100;

        this.fangX = this.bodyX;
        this.fangY = this.bodyY - 100;
        
        this.leyeX = this.bodyX - 30;
        this.leyeY = this.bodyY - 150;
        
        this.reyeX = this.bodyX + 30;
        this.reyeY = this.bodyY - 150;
        
        this.lhornX = this.bodyX + 75;
        this.lhornY = this.bodyY - 200;
        
        this.rhornX = this.bodyX - 75;
        this.rhornY = this.bodyY - 200;

        s: Phaser.Input.Keyboard.Key;
        f: Phaser.Input.Keyboard.Key;
        a: Phaser.Input.Keyboard.Key;
        d: Phaser.Input.Keyboard.Key;
    }
    
    
    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightleg = this.add.sprite(this.rlegX, this.rlegY, "monsterParts", "leg_yellowC.png");
        my.sprite.leftleg = this.add.sprite(this.llegX, this.llegY, "monsterParts", "leg_yellowC.png");

        my.sprite.rightleg2 = this.add.sprite(this.rlegX, this.rlegY, "monsterParts", "leg_blueC.png");
        my.sprite.leftleg2 = this.add.sprite(this.llegX, this.llegY, "monsterParts", "leg_blueC.png");

        my.sprite.leftleg2.flipX = true;
        my.sprite.rightleg2.visible = false; 
        my.sprite.leftleg2.visible = false;

        my.sprite.rightarm = this.add.sprite(this.rarmX, this.rarmY, "monsterParts", "arm_yellowC.png");
        my.sprite.leftarm = this.add.sprite(this.larmX, this.larmY, "monsterParts", "arm_yellowC.png");
        my.sprite.leftleg.flipX = true;
        my.sprite.leftarm.flipX = true;
        
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowC.png");
        my.sprite.body2 = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redC.png");
        my.sprite.head = this.add.sprite(this.headX, this.headY, "monsterParts", "body_yellowB.png");
        my.sprite.body2.visible = false;
        my.sprite.leye = this.add.sprite(this.leyeX, this.leyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.reye = this.add.sprite(this.reyeX, this.reyeY, "monsterParts", "eye_psycho_dark.png");
        
        my.sprite.lhorn = this.add.sprite(this.lhornX, this.lhornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.rhorn = this.add.sprite(this.rhornX, this.rhornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.rhorn.flipX = true;

        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthD.png");
        my.sprite.fang = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false;
        my.sprite.mouth.flipY = true;

        this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.f = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       if (Phaser.Input.Keyboard.JustDown(this.f)){
        my.sprite.mouth.visible = false;
        my.sprite.fang.visible = true;
        my.sprite.body2.visible = true;
        my.sprite.rightleg2.visible = true; 
        my.sprite.leftleg2.visible = true;
       }
       
       if (Phaser.Input.Keyboard.JustDown(this.s)){
        my.sprite.mouth.visible = true;
        my.sprite.fang.visible = false;
        my.sprite.body2.visible = false;
        my.sprite.rightleg2.visible = false; 
        my.sprite.leftleg2.visible = false;
       }

       if (this.d.isDown){
        for (const spr in my.sprite) {
            my.sprite[spr].x += 1;
        }
       }

       if (this.a.isDown){
        for (const spr in my.sprite) {
            my.sprite[spr].x -= 1;
        }
       }
    }

}