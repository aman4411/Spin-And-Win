let config = {
     width : 800,
     height : 600,
     scene : {
         preload : preload,
         create : create,
         update : update
     }
};

let game = new Phaser.Game(config);

function preload(){
      //load an image
      this.load.image('background',"../images/back.jpg");
      this.load.image('wheel',"../images/wheel.png");
      this.load.image('pin',"../images/pin.png");
      this.load.image('stand',"../images/stand.png");
}

function create(){
    let W = game.config.width;
    let H = game.config.height;
     //create that image
     this.add.sprite(0,0,'background');
     this.add.sprite(W/2,H/2+140,'stand').setScale(0.25);
     this.wheel =  this.add.sprite(W/2,H/2,'wheel');
     this.wheel.setScale(0.12);
     this.add.sprite(W/2,H/2-120,'pin').setScale(0.12);

     this.input.on("pointerdown",spinwheel,this);
     
}

function update(){
   //this.wheel.angle +=1;
}

function spinwheel(){

   let rounds = Phaser.Math.Between(2,4);
   let extra_degrees = Phaser.Math.Between(0,11);
   let total_angle = rounds*360 + extra_degrees*30;

   let tween = this.tweens.add({
       targets : this.wheel,
       angle : total_angle,
       ease : "Cubic.easeOut",
       duration : 6000
   })
}