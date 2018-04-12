class Vehicle {
	constructor(manufacturer, numWheels) {
		this.manufacturer = manufacturer;
		this.numWheels = numWheels;
	}
	aboutVehicle() {
		console.log(`This vehicle is made by ${this.manufacturer} and has ${this.numWheels} wheels.`);
	}
}

class Truck extends Vehicle {
	constructor(manufacturer, numWheels, numDoors, hasBed) {
		super(manufacturer, numWheels);
		this.numDoors = numDoors;
		this.hasBed = hasBed;
	}
	aboutVehicle() {
		console.log(
			`This vehicle is made by ${this.manufacturer} and has ${this.numWheels} wheels. It has ${
				this.numDoors
			} doors and ${this.hasBed} a truck bed.`
		);
	}
}

class Sedan extends Vehicle {
	constructor(manufacturer, numWheels, size, mpg) {
		super(manufacturer, numWheels);
		this.size = size;
		this.mpg = mpg;
	}
	aboutVehicle() {
		console.log(
			`This vehicle is made by ${this.manufacturer} and has ${this.numWheels} wheels. It is a ${
				this.size
			} size car that gets ${this.mpg} mpg.`
		);
	}
}

class Motorcycle extends Vehicle {
	constructor(manufacturer, numWheels, hasHandles, hasDoors) {
		super(manufacturer, numWheels);
		this.hasHandles = hasHandles;
		this.hasDoors = hasDoors;
	}
	aboutVehicle() {
		console.log(
			`This vehicle is made by ${this.manufacturer} and has ${this.numWheels} wheels. It is a motorcycle so it ${
				this.hasHandles
			} handlebars and ${this.hasDoors} any doors.`
		);
	}
}

let v1 = new Vehicle('Honda', 4);
let t1 = new Truck('Ford', 4, 2, 'does have');
let s1 = new Sedan('Toyota', 4, 'medium', 34);
let m1 = new Motorcycle('Harley', 2, 'does have', 'does not have');

v1.aboutVehicle();
t1.aboutVehicle();
s1.aboutVehicle();
m1.aboutVehicle();
