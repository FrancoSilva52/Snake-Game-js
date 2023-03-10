
class mainScene{
    //precargado de pantall
    preload(){
        this.load.image('player', './assets/snake.png');
        this.load.image('raton', './assets/raton.png')
        
    }
    //elementos creados para mostrar en pantalla
    create(){
        this.player= this.physics.add.sprite(200,50, 'player');
        this.point = this.physics.add.sprite(500, 300, 'raton');

        //puntuacion y estilo
        this.score = 0;
        let style = { font: '20px Arial', fill: '#000' };
        this.scoreText = this.add.text(20, 30, 'Puntos: ' + this.score, style);
    

        //Reescala las imagenes
        this.player.setScale(0.1);
        this.point.setScale(0.1);

        //Movimientos
        this.arrow = this.input.keyboard.createCursorKeys();
    }
    update(){

        if(this.physics.overlap(this.player, this.point)){
            this.hit();
        }

        //horizontal movimientos
        if (this.arrow.right.isDown) {
             this.player.x += 3;
        } else if (this.arrow.left.isDown) {
             this.player.x -= 3;
        }

        //vertical
        if(this.arrow.down.isDown){
            this.player.y += 3;
        }else if(this.arrow.ip.isDown){
            this.player.y -= 3;
        }

    }
    hit(){
        this.point.x= Phaser.Math.Between(50, 750);
        this.point.y= Phaser.Math.Between(50, 450);

        this.point += 5;

        this.scoreText.setText('Puntos: ' + this.score);

        this.tweens.add({
            targets: this.player,
            duration: 200, 
            scaleX: 1.2, 
            scaleY: 1.2, 
            yoyo: true, 
          });
    }
    
}

new Phaser.Game({
    whidth: 800,
    height: 500,
    backgroundColor: '#dad7cd',
    scene: mainScene,
    physics: {default: 'arcade'},
    parent: 'game',
})