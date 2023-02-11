var obj = {
	a: 5,
	b: 10
};

function additionbycall(num) {
	var sum = this.a + this.b + num;
	return sum;
}

console.log(additionbycall.call(obj, 7)); // The call() method calls a function with a given this value and arguments provided individually.

function additionbyapply(num) {
	var sum = this.a + this.b + num;
	return sum;
}

console.log(additionbyapply.apply(obj, [1])); // apply() method works same as call method excepts it takes parameters as an array.

function additionbybind(num) {
	var sum = this.a + this.b + num;
	return sum;
}

var bindaddition = additionbybind.bind(obj,45); // The bind() method creates a new function that, when called, has its this keyword set to the provided value
console.log(bindaddition());


