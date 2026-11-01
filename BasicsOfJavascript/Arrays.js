const arr = [1,2,3,4,5,6]
const myheros = ["doremon","Shinchain"]

const myArr2 = new Array(1,2,3,4,5)


// arr.push(7)// add values at end 
// arr.push(8) 
// arr.pop()// pop or reomve values from end 
// arr.unshift(10) // add values at start which cause to shift all the values 
// arr.shift()// shift 1 values forward

// console.log(arr.includes(10));
// console.log(arr.indexOf(4));

// const newArr = arr.join()
// console.log(typeof newArr);//bind the arr and convert it into string

// console.log(arr);

console.log("A " , arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);