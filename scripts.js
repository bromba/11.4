
function Phone(brand, price, color, availability) {
	var ava = (availability == 1 ? "in the shop" : "out of stock");
    //Here we put interior of the constructing function.
    this.brand = brand; 
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	
	// probowalam miec wydruk in the shop lub out of stock, ale nie wiem jak poprawnie zakodowac ten warunek!
	this.availability = ava; 
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and avaiability is " + this.availability + ".");
};
var SamsungGalaxyS6 = new Phone ("Samsung", 1600, "black", 1);
var iPhone6S = new Phone ("Apple", 2300, "pink", 1);
var OnePlusOne = new Phone ("onePlus", 3000, "white", 0);
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();