class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.keyS = null;
        this.keyF = null;
        this.keyA = null;
        this.keyD = null;
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
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueC.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX + 80, this.bodyY + 50, "monsterParts", "arm_darkE.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX - 80, this.bodyY + 50, "monsterParts", "arm_darkE.png");
        my.sprite.rightArm.flipX = true;
        my.sprite.leftLeg = this.add.sprite(this.bodyX + 35, this.bodyY + 150, "monsterParts", "leg_darkB.png");
        my.sprite.rightLeg = this.add.sprite(this.bodyX - 35, this.bodyY + 150, "monsterParts", "leg_darkB.png");
        my.sprite.rightLeg.flipX = true;
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 30, "monsterParts", "eye_cute_light.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 30, "monsterParts", "mouthE.png");
        my.sprite.leftAntenna = this.add.sprite(this.bodyX + 40, this.bodyY - 110, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.rightAntenna = this.add.sprite(this.bodyX - 40, this.bodyY - 110, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.rightAntenna.flipX = true;

        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if (this.keyS.isDown){
            my.sprite.mouth.setTexture("monsterParts", "mouthE.png");
        } else if (this.keyF.isDown){
            my.sprite.mouth.setTexture("monsterParts", "mouthF.png");
        }
        if (this.keyA.isDown && !this.keyD.isDown){
            for (let part in my.sprite){
                my.sprite[part].x -= 10;
            } 
        } else if (this.keyD.isDown && !this.keyA.isDown){
            for (let part in my.sprite){
                my.sprite[part].x += 10;
            } 
        }
    }

}