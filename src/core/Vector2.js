/**
 * @author mr.doob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 * @author egraether / http://egraether.com/
 */

THREE.Vector2 = function ( x, y ) {

	this.set(

		x || 0,
		y || 0

	);

};

THREE.Vector2.prototype = {

	set : function ( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	},

	copy : function ( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	},

	clone : function () {

		return new THREE.Vector2( this.x, this.y );

	},


	add : function ( v1, v2 ) {

		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;

		return this;

	},

	addSelf : function ( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	},

	sub : function ( v1, v2 ) {

		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;

		return this;

	},

	subSelf : function ( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	},

	multiplyScalar : function ( s ) {

		this.x *= s;
		this.y *= s;

		return this;

	},

	divideScalar : function ( s ) {

		if ( s ) {

			this.x /= s;
			this.y /= s;

		} else {

			this.set( 0, 0 );

		}

		return this;

	},


	negate : function() {

		return this.multiplyScalar( -1 );

	},

	dot : function ( v ) {

		return this.x * v.x + this.y * v.y;

	},

	lengthSq : function () {

		return this.x * this.x + this.y * this.y;

	},

	length : function () {

		return Math.sqrt( this.lengthSq() );

	},

	normalize : function () {

		return this.divideScalar( this.length() );

	},

	setLength : function ( l ) {

		return this.normalize().multiplyScalar( l );

	},

	// deprecated: same as normalize
	unit : function () {

		return this.normalize();

		// this.multiplyScalar( 1 / this.length() );
		// return this;

	}

};
