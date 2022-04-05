console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let end = 100;
// only show ODDS
for (let num = 1; num <= end; num++) {
    // or if (num % 2 != 0)
    if (num % 2 == 1) {
        console.log(num);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

end = 150;

for (y = 1; y <= end; y++) {
    if (y % 15 == 0) {
        console.log("FIZZBUZZ");
    } else if (y % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(y);
    }
}