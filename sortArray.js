let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let mergedArray = numbers.concat(names);
console.log("Merged array:", mergedArray);

numbers.sort((a, b) => b - a); // Sort numbers in reverse order
console.log("Sorted numbers (reverse):", numbers);

names.sort(); // Sort names alphabetically
console.log("Sorted names:", names);

