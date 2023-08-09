import { number } from "zod";

let variable = 'hello';
let age = 18;

// type explicitly provided
let ageWithType: number;
ageWithType = 18

//boolean strings
let testBoolean: boolean;
testBoolean = true;

//multiple types / union types
let testStringOrNumber: string | number;
testStringOrNumber ='j';
testStringOrNumber = 9;

//array
let names = ['Bryan','Jose', 'Danny'];
names.push('x');

//string array
let testStringArray: string [];
testStringArray = ['1','2','3']

//multiple union
let arr: (string | number) [];
arr = ['cool', 2];

//objects

let user = {
    username: 'John',
    age: 22,
    isAdmin: true
}

user.username = 'Jane';
user.age = 23;
user.isAdmin = false;

//functyion with a return

let myFunc =():string =>{
    return 'two';
}

//funch that take in an argument
let myfunc = (num:number) :number =>{
    return num*2;
}

let func2 =(num: number) :void => {
    console.log('hi')
}