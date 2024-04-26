//TOP Recursion assignments
//View results in DevTools console

//Fibonacci Sequence:  Iterative and recursive examples.
//**Iterative Version**
function iterativeFibonacci(nbr) {
  let fibArray = [0];
  let a = 0;
  let b = 1;
  if (nbr > 0) {
    for (let i = 0; i < nbr - 1; i++) {
      fibArray.push(a + b);
      a = b;
      b = fibArray[i];
    }
  }
  return fibArray;
}
console.log("IterativeFibonacci:", iterativeFibonacci(15));
//**
//**Recursive Version**
function generateRecursiveFibonacci(n, fibArray = [0, 1]) {
  if (n <= 0) {
    return []; // Base case: Return an empty array for non-positive input
  } else if (n == 1) {
    return [0]; // Base case: Return [0] for n = 1
  } else if (n == 2) {
    return fibArray; // Base case: Return [0, 1] for n = 2
  } else if (fibArray.length < n) {
    // Recursive case: Continue generating Fibonacci numbers until the array length reaches n
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
    return generateRecursiveFibonacci(n, fibArray); // Recursively call the function with updated array and remaining count
  } else {
    return fibArray; // Return the generated Fibonacci array when the array length reaches n
  }
}
console.log("RecursiveFibonacci:", generateRecursiveFibonacci(11));
//**
