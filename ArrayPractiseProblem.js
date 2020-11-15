/**
 * * /// 1a -- Generate ten random 3 digit number, store in an array
/// Find the second largest and second smallest without using the sort
var randomThreeDigitsArray =[];
/// Random number generator: The internal code ensures that the random number is always a three digit number
while(randomThreeDigitsArray.length != 10)
{
    var number = Math.floor((Math.random())*1000);
    if( number > 99)
    {
        randomThreeDigitsArray.push(number);
    }
}
/// Printing the array of numbers generated randomly
console.log(randomThreeDigitsArray);
/// Allocating the first array element to be the largest number
var largestNumber = randomThreeDigitsArray[0];
/// Iterating over the array to get the largest number of the array elements
for(var i = 1; i < randomThreeDigitsArray.length; i++)
{
    if(randomThreeDigitsArray[i] > largestNumber)
    largestNumber = randomThreeDigitsArray[i];
}
/// Function defined to get the deviation from the largest element
function DeviationFromLargest(number)
{
    return largestNumber - number;
}
/// Array to store the deviation of the array element fromt the largest element
var differenceArray = [];
/// Computing hte largest deviation --> Useful when we have to compute the second least number
var largestDeviationFromLargestNumber = 0;
/// Looping and storing the deviation in the difference array
for (var i = 0; i < randomThreeDigitsArray.length; i++)
{
    differenceArray.push(DeviationFromLargest(randomThreeDigitsArray[i]));
    if(differenceArray[i] > largestDeviationFromLargestNumber)
    largestDeviationFromLargestNumber = differenceArray[i];
}
/// Assigning the second least devation with a default value as maximum difference of two random three digit numbers
var secondLeastDeviation = 899;
// Variable to store the second largest deviation fromt the largest number
var secondLargestDeviation = 0;
/// Variables to store the result
var secondLargestNumber;
var secondLeastNumber;
/// Single array computing the second largest and the second smallest value in the array
for (var i = 0; i < randomThreeDigitsArray.length; i++)
{
    /// For the second least value of the array
    if((differenceArray[i] > secondLargestDeviation) && (differenceArray[i] != largestDeviationFromLargestNumber))
    {
        secondLargestDeviation = differenceArray[i];
        secondLeastNumber = largestNumber - differenceArray[i];
    }
    /// For the second largest value of the array
    if(differenceArray[i]<secondLeastDeviation && differenceArray[i]!=0)
    {
        secondLargestNumber = largestNumber - differenceArray[i];
        secondLeastDeviation = differenceArray[i];
    }
}
/// Printing the result of the second largest and the second smallest number
console.log("Second Largest Number: " + secondLargestNumber);
console.log("Second Least Number: " + secondLeastNumber);
 */

/**
 * * /// 1b -- Generate ten random 3 digit number, store in an array
/// Find the second largest and second smallest using the sort
var randomThreeDigitsArray =[];
/// Random number generator: The internal code ensures that the random number is always a three digit number
while(randomThreeDigitsArray.length != 10)
{
    var number = Math.floor((Math.random())*1000);
    if( number > 99)
    {
        randomThreeDigitsArray.push(number);
    }
}
/// Printing the array of numbers generated randomly
console.log(randomThreeDigitsArray);
/// Variables to store the result
var secondLargestNumber;
var secondLeastNumber;
/// Sorting the array of numbers, Making use of the sort array helper function
var sortedArray = randomThreeDigitsArray.sort((a,b) => a-b);
console.log(sortedArray);
/// Printing the result of the second largest and the second smallest number
console.log("Second Largest Number: " + sortedArray[sortedArray.length - 2]);
console.log("Second Least Number: " + sortedArray[2]);
 */

/**
 * * /// 1(c) --> To compute the prime factors of a number passed and store them in an array
/// Factors --> i = [2, number] => if(number is divisible by i) then factors = i, number/i
var fs = require("fs");
/// Defining the process module fo the argumentative input
const { argv } = require("process");
/// Argv takes by default a hexadecimal format input
/// Needed to parse to  integer after converting the input to string
let number = parseInt(process.argv[2].toString());
/// Variable to store the factorial of the number
var factors = [];
var primeFactors = [];
/// Iterating till the i < sqrt(number) or i^2 < number
for (let i =2; i*i <= number; i++)
{
    /// Check for a factor
    if(number % i == 0)
    {
        /// number is factor of itself
        if(i*i == number)
        factors.push(i);
        else
        {
            /// pushing two complementary pairs of the fators i.e for a i there exist another factor (number/i)
            factors.push([i, number/i]);
            /// check whether prime or not
            if(PrimeOrNot(i))
            {
                /// If prime push the factor to the prime list of factors
                primeFactors.push(i);
            }
            /// check for the complementary factor is prime or not
            if(PrimeOrNot(number/i))
            {
                primeFactors.push(number/i);
            }
        }
    }
}
/// Printing the result of the factorial
console.log("Prime Factors of " + number + " = " + primeFactors.sort((a,b) => a-b));
/// Function to check whether the number is prime or not
/// @param {number from the input console} number
function PrimeOrNot(number)
{
    for(let i = 2; i < number; i++)
    {
        if(number % i == 0)
        return false;
    }
    return true;
}
 */

 /**
  * * /// 1d -- Return three integer from the array which add upto 0
var arrayOfInteger =[-1,-2, -3, 0, 1, 2, 3];
/// Loop to iterate over the array in nested form and check for sum as 0
/// This code is unsuitable solution if the number of element in the array is too high
for(var i = 0; i < arrayOfInteger.length; i++)
{
    for(var j = 0; j < i; j++)
    {
        for(var k = 0; k <j; k++)
        {
            if(arrayOfInteger[i] +arrayOfInteger[j] +arrayOfInteger[k] == 0)
            console.log(`${arrayOfInteger[i]} , ${arrayOfInteger[j]} , ${arrayOfInteger[k]}`);
        }
    }
}
  */

/**
 * * /// 1e -- To store the value between 0-100 having repeated integers
var repeatedIntegerNumberArray = [];
for(var i = 0; i <= 100; i++)
{
    var valueAsString = i.toString();
    /// Indirectly sorting the single digit integers from the range
    if(valueAsString.length == 2)
    {
        /// Storing the reverse number from pallindrome function return value
        var reverseNumber = PallindromeReturn(i);
        /// If true pushing the number to the array
        if(reverseNumber == i)
        repeatedIntegerNumberArray.push(i);
    }
}
console.log(repeatedIntegerNumberArray);
/// Function to return whether the number is pallindrome or not
/// @param {number from the input console} number
function PallindromeReturn(number) 
{
    var reverseFirstNumber = 0;
    while(number !=0)
    {
        /// Getting the last digit of the current value of firstNumber
        var remainder = number % 10;
        /// Incrementing the reverse value by the place value
        reverseFirstNumber = reverseFirstNumber * 10 + remainder;
        /// converting the float return of the division to integer
        number = parseInt(number/10);
    }
    return reverseFirstNumber;
}
 */