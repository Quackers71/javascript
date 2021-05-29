## Hoisting

### Two Pass Compilation in JavaScript  

- Pass 1
  - All declarations are located and identifiers are known by the compiler.
- Pass 2
  - Execution occurs in Pass 2.  Because all variables are known from Pass1, they may be accessed before they're declared.
- Hoisting
  - The word "Hoisting" is used to describe this behavior because it's as if the declarations are lifted (hoisted) to the top of the function before execution.
  - Hoisted variables are initialized to undefined.