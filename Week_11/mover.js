function Panda(){
	
	this.location = createVector(width/2,height/2);
	this.velocity = createVector(0,6);
	this.acceleration = createVector(random(-.03,.03),random(-.05,-.045));
	this.highest = 4;

	this.update = function(){
	this.velocity.add(this.acceleration); // adding acceleration to velocity 
	this.location.add(this.velocity); // that velocity being added to location (trickle down!!)
	this.velocity.limit(this.highest); // sets the limit 
	}; // after a method of a class

	this.display = function(){
		stroke(255);
		strokeWeight(1);
		//ears
		fill(0);
		ellipse(this.location.x-32, this.location.y-50, 50,42);
		ellipse(this.location.x+32, this.location.y-50, 50,42);
		//head 
		stroke(0);
		strokeWeight(4);
		fill(255);
		ellipse(this.location.x, this.location.y, 120, 120); // dot notation, goes to vector location to access x and y
		// eyes 
		strokeWeight(1);
		fill(0);
		ellipse(this.location.x-28, this.location.y-3, 42,38);
		ellipse(this.location.x+28, this.location.y-3, 42,38);
		//pupils
		fill(255);
		ellipse(this.location.x+24, this.location.y+3, 23,23);
		ellipse(this.location.x-24, this.location.y+3, 23,23);
		fill(0);
		ellipse(this.location.x-22, this.location.y-1, 10,10);
		ellipse(this.location.x+22, this.location.y-1, 10,10);
		
		//nose

		ellipse(this.location.x, this.location.y+25, 10,5);
	};

	this.check = function(){
		if (this.location.y < 80){
			this.location.y = 80;
			this.velocity.y = 0;
			this.acceleration.y=0;
			
		}
		if (this.location.x > width-90){
			this.location.x = width-90;
			this.velocity.x = -5;
			this.acceleration.x = 0;
		}
		else if(this.location.x < 20){
			this.location.x = 20;
			this.velocity.x = 5
			this.acceleration.x =0;
		}
	};
}