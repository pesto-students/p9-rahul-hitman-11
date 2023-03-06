var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  this.subject = subject;
};

Teacher.prototype.printdetails = function () {
  console.log(
    this.name + " age " + this.age + " teches subject " + this.subject
  );
};

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("inheritance");
him.printdetails();
