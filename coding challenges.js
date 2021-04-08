//EX. 1 Display numbers from 1 to 10
for (let input = 1; input <= 10; input++) {
  //console.log(input);
 }


 //EX. 2 Print the odd numbers less than 100
 for (let i = 1; i < 100; i += 2) {
  //console.log(i);
}


//EX. 3 Print the multiplication table with 7
const number = 7;
const range = 10;
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    //console.log(`${number} * ${i} = ${result}`); 
  }



// EX. 4 Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i < 11 ; i++) {
  for (let j = 1; j < 11; j++) {
    const sum = i * j;
   //console.log (`${i} * ${j} = ${sum}`);
  }
}


// EX. 5 Calculate the sum of numbers from 1 to 10
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});
//console.log(sum);


//EX.6 Calculate 10!
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
const factorial = list.reduce((value, currentElement) => {  
  return value * currentElement;
});
 //console.log(factorial);


 //EX.7 Calculate the sum of odd numbers greater than 10 and less than 30
 const oddNumbers =[11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
 const total = oddNumbers.reduce((currentTotal, num) => currentTotal + num);
 //console.log (total);


 //Ex.8 Calculate the sum of numbers in an array of numbers
 const listOfNumbers = [24, 8 ,6 ,3];
 const totalSum = listOfNumbers.reduce((a, b) => a + b);
 //console.log (totalSum);


 // Ex.9 Calculate the average of the numbers in an array of numbers
  const array = [2, 9, 12];
  const sumM = array.reduce((c, d) => c + d );
  //console.log (sumM / array.length);


  /* Ex.10  Create a function that receives an array of numbers and returns an array containing only the positive numbers*/
  const arrayLine = [42, -2, 76, 7, -13, 8, 20, -1];
const getpositiveNumbers = (newArray) => arrayLine.filter(value => value > 0);
const positives = getpositiveNumbers(arrayLine);
//console.log(positives);


//Ex.11 Find the maximum number in an array of numbers
const array1 = [8, 45, 21,  2, 15, 74, 32];
const biggest= 0;
for (i=0; i<=biggest; i++){
    if (array1[i] > biggest) {
        const biggest = array1[i];
    }
}
//console.log(largest);


//Ex.12 Create a function that will return a Boolean specifying if a number is prime
function testPrimeNum(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
//console.log(testPrimeNum(5));


//Ex.13 Calculate the sum of digits of a positive integer number
function sumDigits(n) {
  const sumD = 0;
  while (n) {
      digit = n % 10;
      sumD+= digit;
      n = (n - digit) / 10;
  }
  return sumD;
}
//console.log (sumDigits(-75));


//Ex.14 Print the first 100 prime numbers
for (let count = 0; count <= 100; count++) {

  let notPrime = false;
  for (let i = 2; i <= count; i++) {
      if (count%i===0 && i!==count) {
          notPrime = true;
      }
  }
  if (notPrime === false) {
      //console.log(count);
  }
}

//Ex.15 Rotate an array to the left 1 position
const array2 = [5, 3, 78, 9];
function rotateToLeft(array2){
  const first = array2.shift();
  array2.push(first);
  return array2;
}
//console.log (rotateToLeft(array2));


//Ex.16 Reverse an array
const array3 = [14, 27, 31];
function inplaceReverse(array3) {
  const i = 0;
  while (i < array3.length - 1) {
    array3.splice(i, 0, array3.pop());
    i++;
  }
  return array3;
}
//console.log(inplaceReverse(array3));


/*Ex.17  Create a function that will merge two arrays and return the result as a new array*/
const firstArray = ['monkey','dog','elephant'];
const secondArray = ['crow','cow','duck'];
let thirdArray = firstArray.concat(secondArray);
thirdArray = thirdArray.filter((item,index)=>{
   return (thirdArray.indexOf(item) == index)
})
//console.log (thirdArray);

/* Ex. 18 Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both*/
const arr1=  ['blouse', 'mittens', 'scarf', 'socks', 'pants'];
const arr2=  ['jacket', 'skirt', 'dress', 'socks', 'pants'];
const arrayDifference = arr1.filter(x => arr2.indexOf(x) === -1);
//console.log(arrayDifference); 


/* Ex. 19 Create a function that will receive an array of numbers as argument and will return a new array with distinct elements */
const arr = [4, 5, 6,  7, 12, 14, 5, 14];
function uniqueArray2(arr) {
 let a = [];
  for (let i=0, l=arr.length; i<l; i++)
      if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
          a.push(arr[i]);
  return a;
}
//console.log (uniqueArray2(arr));



/* Ex. 20 Create a function that will return the number of words in a text */
const wordInText = string => string.split(' '). length;
//console.log(`Words in text are ${wordInText("My name is Valeria, I'm already tired, I don't understant no more what I'm doing")}`);