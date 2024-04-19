class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        // Create variables to hold constant values for sprite locations
        this.bodyX = 400;
        this.bodyY = 300;
 
        // Define the locations of the smile and hands relative to the
        // main body location. This way, if we change the main body
        // location, the other values update too.
        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 50;
 
        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 25;
 
        this.left_antennaX = this.bodyX - 30;
        this.left_antennaY = this.bodyY - 125;
 
        this.right_antennaX = this.bodyX + 30;
        this.right_antennaY = this.bodyY - 125;
 
        this.left_handX = this.bodyX - 80;
        this.left_handY = this.bodyY + 20;
 
        this.right_handX = this.bodyX + 80;
        this.right_handY = this.bodyY + 20;
 
        this.left_legX = this.bodyX - 50;
        this.left_legY = this.bodyY + 140;
 
        this.right_legX = this.bodyX + 50;
        this.right_legY = this.bodyY + 140;
        
     //    this.counter = 0;
     //    this.smileType = 'Smile';
 
     //    // Creates a class member variable. 
     //    // Can be accessed in other functions in the class, via “this.PKey
     //    this.PKey = null;
 
        // for smile and Fangs similar to Pkey
        this.SKey = null;
        this.FKey = null;
        
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

        this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        // my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");

        // my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthB.png");

        // my.sprite.eye1 = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_red.png");

        my.sprite.right_antenna = this.add.sprite(this.right_antennaX, this.right_antennaY, "monsterParts", "detail_green_antenna_small.png");
        my.sprite.left_antenna = this.add.sprite(this.left_antennaX, this.left_antennaY, "monsterParts", "detail_green_antenna_small.png");
        my.sprite.left_antenna.flipX = true; 

        my.sprite.right_hand = this.add.sprite(this.right_handX, this.right_handY, "monsterParts", "arm_greenB.png");
        my.sprite.left_hand = this.add.sprite(this.left_handX, this.left_handY, "monsterParts", "arm_greenB.png");
        my.sprite.left_hand.flipX = true; 
        my.sprite.right_hand.angle -= 20;
        my.sprite.left_hand.angle += 20;

        my.sprite.right_leg = this.add.sprite(this.right_legX, this.right_legY, "monsterParts", "leg_greenB.png");
        my.sprite.left_leg = this.add.sprite(this.left_legX, this.left_legY, "monsterParts", "leg_greenB.png");
        my.sprite.left_leg.flipX = true; 

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.eye1 = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_red.png");

        my.sprite.fangs = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthB.png");
        my.sprite.fangs.visible = false;
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // Checks to see if S is down, Writes to console once, due to use of justDown().
        if (Phaser.Input.Keyboard.JustDown(this.SKey)) {
            my.sprite.fangs.visible = false;
            // my.sprite.rightPeaceHand.visible = false;
            my.sprite.smile.visible = true;
        }

        // Checks to see if D is down, Writes to console once, due to use of justDown().
        if (Phaser.Input.Keyboard.JustDown(this.FKey)) {
            my.sprite.fangs.visible = true;
            // my.sprite.rightPeaceHand.visible = false;
            my.sprite.smile.visible = false;
        }    

        // Handle continuous left movement
        if (this.AKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 2; // Move each part left by 2 pixels
            }
        }

        // Handle continuous right movement
        if (this.DKey.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 2; // Move each part right by 2 pixels
            }
        }
       
    }

}