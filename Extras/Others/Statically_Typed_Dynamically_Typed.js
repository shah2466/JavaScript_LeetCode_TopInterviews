//Dynamically-typed languages (javaSCript) perform type checking at runtime, while statically type langauges such as Java
//perform type checking at Compile time. Here the type means data type of the variable.

//Statically type example:
// int a = 10;
// print(a); //this is done in Java.

// a = "Ram";
// print(a); //cant do it because a was reassigned to "Ram" which changes the a's type from int to string

//Dynamically typed:

var a = 10;
console.log(a);

a = "Sam"; //here the type of 'a' is changed from number to string. It is allowed in JS since it is dynamically typed language
console.log(a);
