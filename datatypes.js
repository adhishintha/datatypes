                                     DATATYPE:

Definition of datatype:
        A data type in JavaScript is the kind of value a variable can hold, which defines how it’s stored and what operations can be done on it.
CATEGORY:
Primitive—[Number,String,Boolean,Null,Undefined,BigInt,Symbol]
Non-primitive—[Object,Array,Function]
Definition of primitive:
          A primitive data type in JavaScript is a basic, immutable value type(cannot be changed directly)that stores a single piece of data directly in memory.
TYPES:
1.Number
      Represents numeric values, including integers, decimals, NaN (Not a Number), Infinity, and -Infinity.
Example:-
let age = 25;      
let price = 25.27;  
let notNumber = NaN;  
let infinite = Infinity;
2.String:
     Represents a sequence of characters enclosed in single ('), double ("),for text.
Example:
let name = "Adhi";  
let city = 'Chennai'; 

3.Boolean:
       Represents logical values that can be either true or false.
Example:
Let isRaining= true;  
let isSunny = false;
4.Null:
      Represents an intentional empty value (nothing).
Example:
let a = null;
5.Undefined:
       A variable that is declared but not assigned any value automatically gets undefined.
Example:
let x;  
console.log(x); // undefined
6.Symbol:
        Represents a unique identifier, often used as object keys.
Example:
let id = Symbol("id");
let anotherId = Symbol("id");
console.log(id === anotherId);
7.BigInt:
         Represents integers larger than Number.MAX_SAFE_INTEGER.
         Written with an n at the end.
Example:
let normalNumber = 9007199254740991; // This is the largest safe integer in JS
let bigNumber = 9007199254740992n;   // This is a BigInt
Definition of Non-primitive:
         A non-primitive data type in JavaScript is a mutable reference type(can be changed) that can hold collections or complex data structures.
 
Types:
1.Object:
       An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
Example:
let person = {
  name: "Adhi",
  age: 25,
  city: "Chennai"
};
console.log(person.name); // "Adhi"
2.Array:
       An array is an ordered list of values (index-based), used to store multiple items in a single variable.
Example:
let fruits = ["apple", "kiwi", "mango"];
console.log(fruits[1]); // "kiwi"

3.Function:
      A block of code designed to perform a particular task. Functions are also a type of Object.
Example:
function add(a,b) 
{
        return a+b;
    }
console.log(add(10,20));// 30

