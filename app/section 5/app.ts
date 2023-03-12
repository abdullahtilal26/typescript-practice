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

