//------------------Lecture 59,60,61 C;ass------------------
class Person {
name:string;
age:number;
salary:number;
    constructor(_name:string, _age:number) {
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
name:string;
age:number;
salary:number;
    constructor(_name:string, _age:number) {
        this.name = _name;
        this.age = _age;
        this.salary = 100;
    }
    ;
    getName(this:Person2) {
        //cant do simple name if want to access class variable
        return this.name;
    }
    setName(this:Person2) {
        //cant do simple name if want to access class variable
        console.log("person name", this.name);
    }
}

const atk2 = new Person2("atkk", 20);
const person2Copy = { getName: atk2.getName, setName: atk2.setName };
// person2Copy.getName(); //compile time error as getName expects the type of this as Person2.This could be ressolved by adding name and other attributes of class in the object property in the above object becasue at the end they all are object
const person2Copy2 = { name:"atk",age:2,salary:300,getName: atk2.getName, setName: atk2.setName };
person2Copy2.getName()

// ------------------Lecture 62 acces modifire--------------------------------------------
class Car{
    private engineNo:number;
    constructor(){
        this.engineNo=123;
    }
    public setEngineNo(_engineNo:number){
        this.engineNo=_engineNo
    }
    private getEngineNo(){
        return this.engineNo
    }
}

const honda=new Car()
honda.setEngineNo(4567)
// honda.getEngineNo()error as this function is private
//Note in normal js there is no concept of access modiefier therefore the compile js code will still has all members as public.However these are important in TS as we can have compile time errors in TS when having conflicting access modifires

// ------------------Lecture 63,64 short hand initialization and readonly access modifier--------------------------------------------
class Bus{
    constructor(private engine:string,public plateNo:number){

    }

    public getEngine(){
        //cant refer using simply attribute name.Need to use this
        //  console.log(engine)error
        console.log(this.engine)
    }
      public getPlateNo(){
         //cant refer using simply attribute name.Need to use this
        //  console.log(plateNo)error
        console.log(this.plateNo)
    }
}

const mazda=new Bus("abc",123);
mazda.getEngine()
mazda.plateNo
// mazda.engine error as its private
// const hino=new Bus();error as wee need to pass value to constructore for initialization.If we want to set parameters optional then need to set defaullt value in conctructor liek below
class Test{
    
    //readonly keyword help us to set the value of variable only at the time of initialization.We cannot change its value after initialization.This works somewhat like const however class member cannot have const
    private readonly id:number;

    // private const regNo:number; error as class meber cant have const
    //here its optional to pass paramter in constructore
    constructor(private engine:string="abc"){
        this.id=0
    }

    setId(){
        // this.id=5 error as id is readonly
    }
}

// ------------------Lecture 65,66,67,68 Inheritence,over riding and protected access modifier and setter and getters and static members--------------------------------------------
class Vehicle{
    //Note we cannot access static variable and methode is normall methode of class using this keyword as this represent to instance and for static members instance creation is not required,If need to access static member in normal methodes,we need to use class name as compare to this keyword
    static vehicleQty=10;
    static setVehicleQty(qty:number){
        Vehicle.vehicleQty=qty
    }

    protected engineNo:number;
    constructor(private name:string){
        this.name=""
        this.engineNo=1234
    }

    getName():string{
        // console.log(this.vehicleQty) error
        console.log(Vehicle.vehicleQty)
        return this.name
    }

    getEngineNo(){

        console.log("Base class",this.engineNo)
    }
}

//cant inherit from more than 1 class
class Truck extends Vehicle{

    private maxWeight:number;
    constructor(_name:string){
        //need to call super for initiating base class constructore and it should be called beofer we use this operator in child class constructor
        super(_name)
        this.maxWeight=10;
    }

    //setter in ts
    set settingMacWeight(_weight:number){
        this.maxWeight=_weight    
    }

    //getter in ts
   get getGettingMaxWeight(){
        return this.maxWeight
    }

    retriveEngineNo():number{
        //acessing protected member of base class
        return this.engineNo
    }

    //overriding base class methode
    getEngineNo() {
        console.log("child class",this.engineNo)
    }
}

const v1=new Vehicle("v1")

// const troler=new Truck() error as base class constructore needs arguments
const troler=new Truck("mazda troller")
//setting value throgh setter is done like below.We dont set like calling function
troler.settingMacWeight=5000
//getting value through getter
console.log(troler.getGettingMaxWeight)

//static properties and methode can be accessed just by class name and no need to creat an instance before accessing them via new
//Math.PI is static variable
//Math.pow() is static methode

Vehicle.setVehicleQty(1000)//callling static methode
console.log(Vehicle.vehicleQty)//accessing static variable

// ------------------Lecture 69 Abstract class and methods---------------------------
abstract class Payment{
    protected amount:number;
    constructor(_amount:number=0){
        this.amount=_amount;
    }
    abstract pay():void;

    getAmount():number{
        return this.amount
    }

}

class PaymentViaCard extends Payment{
    private cardNo:number;

    constructor(){
        super(8000);
        this.cardNo=4242424242424;
    }

    pay(): void {
        console.log("paying via card and amount is: ",this.getAmount())
    }
}

//abstreact method must be implemented by child class
//abstract class cant be instantiated

// const paymentObj=new Payment(); error as cant instantiate abstract class object
const debitCard=new PaymentViaCard();
console.log(debitCard.getAmount())
debitCard.pay();

// ------------------Lecture 70 private constructor and singleton patteren---------------------------
class VerifyPassword{
    private password:string;
    private static instance:VerifyPassword
    private constructor(_password:string="abc"){
        this.password=_password
    }

    static getInstance():VerifyPassword{
        if(this.instance){//we can olso use VerifyPassword.instance
            console.log("returning old instance")
            return this.instance
        }
        else{
            console.log("creating new instance")
            this.instance=new VerifyPassword(Date().toString())
            return this.instance;
        }
    }

    public getPassword(){
        console.log("password is ",this.password)
    }

}

// const verify=new verifyPassword() cannot instantiate VerifyPassword class as its constructor is private
const pass1=VerifyPassword.getInstance();
pass1.getPassword()
const pass2=VerifyPassword.getInstance();
pass2.getPassword()

// -----------------******** BONUS LEARN ABOOUT PROTOTYPE ********--------------------

// -----------------Lecture 72,73,74,75 Interfaces AND READ ONLY VARIABLE--------------------
//Interface describe the structure of the object/Class
//Interface cant have initializer
//can also use it as type

interface Deliver{
    to:string;
    from:string;

    send(date:string):void
}

let dhl:Deliver;
dhl={
    to:"pakistan",
    from:"usa",
    send(date:string){
        console.log("deliver on ",date)
    }
}

//what is the use of interface then as type keyword does the same thing?
//in type we can used advance types like union types etc
//interface are more clearer than types and generally interfaces are used for custom type as compare to type
//you can implment the interface in class but can also do with types
// interface act like trhe contract a class can must implement 

interface Greetable{
    greeting:string;
    greet(sentence:string):void
}

interface Eatable{
    food:string
    readonly type:string
    eat(methode:string):void
}
//interfaces classes has no implmentation at all unlike abstract class
//all members and methods in interface must be implemented in child class
//class can implment multiple interfaces
class Man implements Greetable,Eatable{
     greeting: string;
     food:string;
     type:string;

    constructor(){

        this.greeting="How are you?"
        this.food="Apple"
        this.type="solid"
    
    }

    greet(sentence:string){
       
        console.log(sentence+this.greeting)
    }

    eat(methode:string){
        console.log(methode+this.food)
    }

    setType(_type:string){
        this.type=_type
    }
}

const ali=new Man()
ali.greet("Hello")
ali.eat("Eating")
ali.setType("LIQUID")
ali.type="liquid"//can change the readonly value as its not of type Eatable and is of Child type

//if you variable of TYPE OF ONE INTERFACE AND THE CHILD CLASS IMPLEMNTS TWO INTERFACES,THEN THE VARIABLE WILL NOT CALL OR ACCESS THE MEMBERS OR METHODS OF OTHER iNTERFACE and the memebrs and methods added by child class not including the implemented one
let ahmed:Greetable;
ahmed=new Man()
ahmed.greet("Hi,")
// ahmed.setType()//error as ahmed is of type greetable and cant acces child class own memebrs and methods
// ahmed.eat() error Error as ahmed is of type Greetable and wont access other innterface method/mmeber even if the object implemnts both interfaces

let zain:Eatable
zain=ali
zain.eat("Eating...")
// zain.gret() Error as zain is of type Eatable and wont access other innterface method/mmeber even if the object implemnts both interfaces
let asad:Eatable=new Man()
// asad.type="asas" error as th asad is of type Eatable and cant change the valye of type as its readonly.
//we impose a certain structure for child classes to implemtn if they have same funcytionality using interfaces
//can inetrafce class have constructor?
//interface cant have access modifier like private,protected.It can only have readonly where only the variable of that type of interface will get error if change the value.Child class that implememnts that member can change the value

//******* gO THROUGH READONLY AGAIN AS ITS HAVING SOME ISSUES WHEN USING READONLY VARIABLE IN CHILD CLASS.iTS ALLOWING TO CHANGE THE VALUE OF READONLY VARIABLE */

// -----------------Lecture 76 Extending Interfaces--------------------
interface Plane{
    readonly altitude:number
}
interface Weapon{
    readonly missile:string
    fire(fireQty:number):void
}
//interface can extend multiple interfaces
interface FighterJet extends Plane,Weapon {
    radius:number
    searchEnemy(range:number):void
}
//class that implements the interface that is enxtending from multiple interfaces,need to implement all members and methods combine
class F22 implements FighterJet{
    altitude: number;
    missile:string;
    radius:number
    constructor(){
        this.altitude=0
        this.missile="nuke"
        this.radius=5
    }
    fire(fireQty:number){
        console.log("Firring no of "+fireQty+" "+this.missile)
    }

    searchEnemy(range:number){
        console.log("searching enemies in the range and radius of "+range+" "+this.radius)
    }
}

const f22Jet=new F22()
f22Jet.altitude=100 
f22Jet.missile="bio"
f22Jet.radius=78
f22Jet.fire(3)
f22Jet.searchEnemy(10)
// *************************** altitude,missile are readonly and they are still chnagabale.Also Need to see how to add access modifier for such member inorder to make them private **********************************

// -----------------Lecture 77 Interfaces as function type--------------------
// Interfaces can be used to define the structure of funtion as replacement of function type

type AddFn=(a:number,b:number)=>number

let add:AddFn;
add=(n1:number,n2:number)=>{
    return n1+n2
}
console.log(add(2,4))

interface ProductFn{
    //anonymus function in interface
    //TS understand this special syntax and identify that you want this interface as function type
    (a:number,b:number):number
}

let product:ProductFn;
product=(n1:number,n2:number)=>{
    return n1*n2
}
console.log(product(5,8)) 

// -----------------Lecture 78 Optinal paramters and properties in Interfaces--------------------
//you can define optional properties in interfaces and classes
interface Human{
    readonly name:string;
    age?:number//here age is optional to implement
    getAge?():number//here get age is optional to implement
    weight?:number
}

class Woman implements Human{
    name: string;
    weight:number//you can have an optional property in interface but can make it non-optional in class that implements it
    public height?:number
    //here we didint implement age member as its now optional
    //here we didnt implemet getAge function as its optional to implement
    constructor(_height?:number){
        if(_height){
            this.height=_height
        }
        this.name=""
        this.weight=0//you can have an optional property in interface but can make it non-optional in class that implements it
    }
}

const sarah=new Woman()
const emily=new Woman(5)
console.log(sarah.height,emily.height)

// -----------------Lecture 79 Compiling Interfaces in JS--------------------
//we know that the class in TS compiled to js code considering the ES version
//if its es6 then ts will compile the code into js which will have class
//But if the es5 is used then it will use the other alternative like constructore functions etc to compile ts class into es5 js code

//However what happens to Interfaces in TS?
//Nothing....as interfaces are purely ts feature and only available during development.For example forthe following interface class we dont get any converted code in compilked js file
interface check{
    checking():number
}

//its a ts feature that help you to better structure your code and write clean code

