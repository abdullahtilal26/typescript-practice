"use strict";
//------------------Lecture 59,60,61 C;ass------------------
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        this.salary = 100;
    }
    ;
    getName() {
        //cant do simple name if want to access class variable
        return this.name;
    }
    setName() {
        //cant do simple name if want to access class variable
        console.log("person name", this.name);
    }
}
console.log(new Person("atkk", 20).getName());
const atk = new Person("atkk", 20);
//this refere to the entity calling it
const personCopy = { getName: atk.getName, setName: atk.setName };
personCopy.getName(); //undefined as this refer to calling entity that is personCopy and it doesnot found name init
// personCopy.setName()//ERROR as setName need type of person
const personCopy2 = { name: "test", getName: atk.getName };
personCopy2.getName(); //no error and prints "test"
const personCopy3 = { getName: atk.getName, setName: atk.setName };
// personCopy3.setName()//error as setNAme ned type of person
// atk.salaey error
//Inorder to avoid the above mentioned issue we can add the type of this in method
class Person2 {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        this.salary = 100;
    }
    ;
    getName() {
        //cant do simple name if want to access class variable
        return this.name;
    }
    setName() {
        //cant do simple name if want to access class variable
        console.log("person name", this.name);
    }
}
const atk2 = new Person2("atkk", 20);
const person2Copy = { getName: atk2.getName, setName: atk2.setName };
// person2Copy.getName(); //compile time error as getName expects the type of this as Person2.This could be ressolved by adding name and other attributes of class in the object property in the above object becasue at the end they all are object
const person2Copy2 = { name: "atk", age: 2, salary: 300, getName: atk2.getName, setName: atk2.setName };
person2Copy2.getName();
// ------------------Lecture 62 acces modifire--------------------------------------------
class Car {
    constructor() {
        this.engineNo = 123;
    }
    setEngineNo(_engineNo) {
        this.engineNo = _engineNo;
    }
    getEngineNo() {
        return this.engineNo;
    }
}
const honda = new Car();
honda.setEngineNo(4567);
// honda.getEngineNo()error as this function is private
//Note in normal js there is no concept of access modiefier therefore the compile js code will still has all members as public.However these are important in TS as we can have compile time errors in TS when having conflicting access modifires
// ------------------Lecture 63,64 short hand initialization and readonly access modifier--------------------------------------------
class Bus {
    constructor(engine, plateNo) {
        this.engine = engine;
        this.plateNo = plateNo;
    }
    getEngine() {
        //cant refer using simply attribute name.Need to use this
        //  console.log(engine)error
        console.log(this.engine);
    }
    getPlateNo() {
        //cant refer using simply attribute name.Need to use this
        //  console.log(plateNo)error
        console.log(this.plateNo);
    }
}
const mazda = new Bus("abc", 123);
mazda.getEngine();
mazda.plateNo;
// mazda.engine error as its private
// const hino=new Bus();error as wee need to pass value to constructore for initialization.If we want to set parameters optional then need to set defaullt value in conctructor liek below
class Test {
    // private const regNo:number; error as class meber cant have const
    //here its optional to pass paramter in constructore
    constructor(engine = "abc") {
        this.engine = engine;
        this.id = 0;
    }
    setId() {
        // this.id=5 error as id is readonly
    }
}
// ------------------Lecture 65,66,67,68 Inheritence,over riding and protected access modifier and setter and getters and static members--------------------------------------------
class Vehicle {
    static setVehicleQty(qty) {
        Vehicle.vehicleQty = qty;
    }
    constructor(name) {
        this.name = name;
        this.name = "";
        this.engineNo = 1234;
    }
    getName() {
        // console.log(this.vehicleQty) error
        console.log(Vehicle.vehicleQty);
        return this.name;
    }
    getEngineNo() {
        console.log("Base class", this.engineNo);
    }
}
//Note we cannot access static variable and methode is normall methode of class using this keyword as this represent to instance and for static members instance creation is not required,If need to access static member in normal methodes,we need to use class name as compare to this keyword
Vehicle.vehicleQty = 10;
//cant inherit from more than 1 class
class Truck extends Vehicle {
    constructor(_name) {
        //need to call super for initiating base class constructore and it should be called beofer we use this operator in child class constructor
        super(_name);
        this.maxWeight = 10;
    }
    //setter in ts
    set settingMacWeight(_weight) {
        this.maxWeight = _weight;
    }
    //getter in ts
    get getGettingMaxWeight() {
        return this.maxWeight;
    }
    retriveEngineNo() {
        //acessing protected member of base class
        return this.engineNo;
    }
    //overriding base class methode
    getEngineNo() {
        console.log("child class", this.engineNo);
    }
}
const v1 = new Vehicle("v1");
// const troler=new Truck() error as base class constructore needs arguments
const troler = new Truck("mazda troller");
//setting value throgh setter is done like below.We dont set like calling function
troler.settingMacWeight = 5000;
//getting value through getter
console.log(troler.getGettingMaxWeight);
//static properties and methode can be accessed just by class name and no need to creat an instance before accessing them via new
//Math.PI is static variable
//Math.pow() is static methode
Vehicle.setVehicleQty(1000); //callling static methode
console.log(Vehicle.vehicleQty); //accessing static variable
// ------------------Lecture 69 Abstract class and methods---------------------------
class Payment {
    constructor(_amount = 0) {
        this.amount = _amount;
    }
    getAmount() {
        return this.amount;
    }
}
class PaymentViaCard extends Payment {
    constructor() {
        super(8000);
        this.cardNo = 4242424242424;
    }
    pay() {
        console.log("paying via card and amount is: ", this.getAmount());
    }
}
//abstreact method must be implemented by child class
//abstract class cant be instantiated
// const paymentObj=new Payment(); error as cant instantiate abstract class object
const debitCard = new PaymentViaCard();
console.log(debitCard.getAmount());
debitCard.pay();
// ------------------Lecture 70 private constructor and singleton patteren---------------------------
class VerifyPassword {
    constructor(_password = "abc") {
        this.password = _password;
    }
    static getInstance() {
        if (this.instance) { //we can olso use VerifyPassword.instance
            console.log("returning old instance");
            return this.instance;
        }
        else {
            console.log("creating new instance");
            this.instance = new VerifyPassword(Date().toString());
            return this.instance;
        }
    }
    getPassword() {
        console.log("password is ", this.password);
    }
}
// const verify=new verifyPassword() cannot instantiate VerifyPassword class as its constructor is private
const pass1 = VerifyPassword.getInstance();
pass1.getPassword();
const pass2 = VerifyPassword.getInstance();
pass2.getPassword();
let dhl;
dhl = {
    to: "pakistan",
    from: "usa",
    send(date) {
        console.log("deliver on ", date);
    }
};
//interfaces classes has no implmentation at all unlike abstract class
//all members and methods in interface must be implemented in child class
//class can implment multiple interfaces
class Man {
    constructor() {
        this.greeting = "How are you?";
        this.food = "Apple";
        this.type = "solid";
    }
    greet(sentence) {
        console.log(sentence + this.greeting);
    }
    eat(methode) {
        console.log(methode + this.food);
    }
    setType(_type) {
        this.type = _type;
    }
}
const ali = new Man();
ali.greet("Hello");
ali.eat("Eating");
ali.setType("LIQUID");
ali.type = "liquid"; //can change the readonly value as its not of type Eatable and is of Child type
//if you variable of TYPE OF ONE INTERFACE AND THE CHILD CLASS IMPLEMNTS TWO INTERFACES,THEN THE VARIABLE WILL NOT CALL OR ACCESS THE MEMBERS OR METHODS OF OTHER iNTERFACE and the memebrs and methods added by child class not including the implemented one
let ahmed;
ahmed = new Man();
ahmed.greet("Hi,");
// ahmed.setType()//error as ahmed is of type greetable and cant acces child class own memebrs and methods
// ahmed.eat() error Error as ahmed is of type Greetable and wont access other innterface method/mmeber even if the object implemnts both interfaces
let zain;
zain = ali;
zain.eat("Eating...");
// zain.gret() Error as zain is of type Eatable and wont access other innterface method/mmeber even if the object implemnts both interfaces
let asad = new Man();
//class that implements the interface that is enxtending from multiple interfaces,need to implement all members and methods combine
class F22 {
    constructor() {
        this.altitude = 0;
        this.missile = "nuke";
        this.radius = 5;
    }
    fire(fireQty) {
        console.log("Firring no of " + fireQty + " " + this.missile);
    }
    searchEnemy(range) {
        console.log("searching enemies in the range and radius of " + range + " " + this.radius);
    }
}
const f22Jet = new F22();
f22Jet.altitude = 100;
f22Jet.missile = "bio";
f22Jet.radius = 78;
f22Jet.fire(3);
f22Jet.searchEnemy(10);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(2, 4));
let product;
product = (n1, n2) => {
    return n1 * n2;
};
console.log(product(5, 8));
class Woman {
    //here we didint implement age member as its now optional
    //here we didnt implemet getAge function as its optional to implement
    constructor(_height) {
        if (_height) {
            this.height = _height;
        }
        this.name = "";
        this.weight = 0; //you can have an optional property in interface but can make it non-optional in class that implements it
    }
}
const sarah = new Woman();
const emily = new Woman(5);
console.log(sarah.height, emily.height);
//Abstract classes are compile to js to some extent
class verify {
}
//its a ts feature that help you to better structure your code and write clean code
