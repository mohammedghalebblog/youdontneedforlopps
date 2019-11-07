// Exercise 7: Write a function that removes odd numbers of an array

function removeOddNumbers(numbers) {
    return numbers.filter(number => !(number%2));
}

module.exports = removeOddNumbers;
