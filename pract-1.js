// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

const input = prompt("Введите слово");

if (input === null || input.trim() === '') {
    alert('Invalid value');
} else {
    const lengthString = input.length;
    if (lengthString % 2 === 0) {
        const lengthString = input.length;
        const startIndex = lengthString / 2 - 1;
        const endIndex = startIndex + 2;
        // console.log(startIndex);
        // console.log(endIndex);
        alert(input.slice(startIndex, endIndex));
    } else {
        const centralIndex = Math.floor(lengthString / 2);
        alert(input.slice(centralIndex));
    }
}