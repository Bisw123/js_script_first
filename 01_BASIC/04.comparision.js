console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


 // avoid all this types of code 
//  -------------------------------------------------------
console.log(null > 0);
console.log(null== 0);
console.log(null >= 0);

// The reasion is that an equality check == and comparisons >,<,>=,<= work differently.
// Comparisons convert null to a treating it as 0 .
// That's why (3)null >= 0 is true and (1)null > 0 is false.


//  avoid all this types of code 
//  ----------------------------------------
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


