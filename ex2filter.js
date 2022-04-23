/**getPositiveNumbers returns an array
getPositiveNumbers returns only the positive numbers
* @param {number[]} numbers
 */

 function getPositiveNumbers(numbers) {
    console.log(numbers);
    return numbers.filter(number => number > 0);
}


// sample usage (do not modify)
console.log(getPositiveNumbers([10, -5, 2, -4]));

// _____________________
/**Complete the function getPassingTests such that it returns all
 *  the test results that have a passing grade (10 and above).
// param {object[]} results
 */
 function getPassingTests(results) {
    console.log(results);
    return results.filter(result => result.grade >= 10);
}

// sample usage (do not modify)
const data = [{
    id: 1,
    grade: 10
}, {
    id: 2,
    grade: 4
}, {
    id: 3,
    grade: 18
}]
console.log(getPassingTests(data))


// Complete the function getPositiveNumbers such that it returns all numbers greater than 0.
// param {number[]} numbers
function getPositiveNumbers(numbers) {
    console.log(numbers);
    return numbers.filter(number => number > 0);
}





