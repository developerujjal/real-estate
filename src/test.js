const name = 'Firebase: Error (auth/email-already-in-use)';
const errorMessage = name.split('(')[1].split(')')[0]; // Extracts 'auth/email-already-in-use'
const emailError = errorMessage.split('/')[1].replace(/-/g, ' '); // Converts it to 'email already in use'

console.log(emailError); // Output: email already in use
