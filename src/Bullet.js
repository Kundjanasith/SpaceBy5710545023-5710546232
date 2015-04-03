var Bullet = cc.Sprite.extend({

	ctor: function(){
		this._super();
        this.initWithFile( 'res/images/bullet.png' );
    },

    update: function(){
       var x = this.getPositionX();
       this.setPositionX(x+this.speed);
    },

    randomPosition: function() {
        var y = 10 + Math.floor( Math.random() * ( screenHeight - 10 ) );
        this.setPosition( new cc.Point( 100, y ) );
    } 

}); 

var NormalBullet = Bullet.extend({

    ctor: function(){
        this._super();
        this.speed=5;
    }

});

var FastBullet = Bullet.extend({

    ctor: function(){
        this._super();
        this.speed=10;
    }

});

var WaveBullet = Bullet.extend({
    
    ctor: function() {
        this._super();
        this.step = 0;
        this.period = 30.0 + Math.random() * 20;
    },

    update: function( dt ) {
        var pos = this.getPosition();
        this.step ++ ;
        this.setPosition( cc.p( pos.x + 5, pos.y + 4 * Math.sin( Math.PI * this.step / this.period ) ) );
    }

});
