var Ship = cc.Sprite.extend({

	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/ship.png' );
	}, 

	press: function(press){
		if(press==cc.KEY.up){
			var y = this.getPositionY();
			if ( y < screenHeight - 10 ) {
				y += 10;
				this.setPositionY( y );
			}
		}
		if(press==cc.KEY.down){
			var y = this.getPositionY();
			if ( y > 10 ) {
				y -= 10;
				this.setPositionY( y );
			}

		}
	}

});
