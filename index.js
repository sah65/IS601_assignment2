// Function to reverse a string
function reverseString() {
    const input = document.getElementById('inputString').value;
    const reversedString = input.split('').reverse().join('');
    document.getElementById('outputReverse').textContent = `Reversed String: ${reversedString}`;
}

// Function to check if a number is a palindrome
function checkPalindrome() {
    const input = document.getElementById('inputPalindrome').value;
    const reversedInput = input.split('').reverse().join('');
    const isPalindrome = (input === reversedInput);
    document.getElementById('outputPalindrome').textContent = 
        isPalindrome ? "It's a palindrome!" : "Not a palindrome.";
}

// Function to calculate total with tip
function calculateTip() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercent = parseFloat(document.getElementById('tipPercent').value);
    const tipAmount = (tipPercent / 100) * subtotal;
    const totalAmount = subtotal + tipAmount;
    document.getElementById('outputTip').textContent = `Total amount: $${totalAmount.toFixed(2)}`;
}