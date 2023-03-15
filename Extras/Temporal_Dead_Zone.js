function foo(x, condition) {
  if (condition) {
    console.log(x); //'x' here is inside the temporal dead zone for 'const x = 2'. const x = 2 has the scope inside the entire block, which means the passed value of
    //x = 1 is not taken. And since the 'x' is not declared when console.log(x) is called, we get the reference error: 'Cannot access 'x' before initialization'
    let x = 2; //temporal end zone for 'x' ends here since it is declared and assigned for the first time.
    console.log(x);
  }
}

foo(1, true); //ReferenceError: Cannot access 'x' before initialization --in line 3.
