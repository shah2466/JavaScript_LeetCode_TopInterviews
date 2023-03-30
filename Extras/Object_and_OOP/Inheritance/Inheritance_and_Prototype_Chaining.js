function doSomething() {}
doSomething.prototype.foo = "bar";
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";

console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop);
console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo);
console.log("doSomething.prop:          ", doSomething.prop);
console.log("doSomething.foo:           ", doSomething.foo); //undefined . *************WHY??
console.log("doSomething.prototype.prop:", doSomething.prototype.prop);
console.log("doSomething.prototype.foo: ", doSomething.prototype.foo);

/**
 * 
 * The doSomething function itself doesn't have an "own" property called foo, so JavaScript looks up the prototype chain.
The doSomething.prototype object has an "own" property called foo with a value of "bar" but 
this object is the prototype for the instance of the doSomething function. The prototype for the doSomething is ‘Object.prototype’. 
So, ‘foo’ is searched first on the function itself, it does not find the foo there, then the inter[retor looks for foo in ‘Object.prototype’, it does not 
    find there either, hence the result is ‘undefined’


'doSomething.prototype' is not the prototype of the 'doSomething' function, 'Object.prototype' is.
Object.prototype does not have ‘foo’ defined on it, hence 'doSomething.foo' = 'undefined'. Because, ‘foo’ is not doSomething’s own property, nor it 
exists on it prototype object which is 'Object.prototype'. 

 */
