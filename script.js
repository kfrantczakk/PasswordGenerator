// ELEMENTY HTML
var passwordLengthInput = document.getElementById('password-length');
var includeLowercase = document.getElementById('lowercase');
var includeUppercase = document.getElementById('uppercase');
var includeNumbers = document.getElementById('numbers');
var includeSpecial = document.getElementById('specials');
var passwordOutput = document.getElementById('password-otp');
var generatePasswordButton = document.getElementById('generate-password');
// GENEROWANIE HASŁA FUNKCJA
function generatePassword() {
    var length = parseInt(passwordLengthInput.value);
    var characters = '';
    if (includeLowercase.checked) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeUppercase.checked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeNumbers.checked) {
        characters += '0123456789';
    }
    if (includeSpecial.checked) {
        characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    if (characters === '') {
        alert('Wybierz przynajmniej jedną kategorię znaków!');
        return '';
    }
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
// GENEROWANIE HASŁA PRZYCISK
generatePasswordButton.addEventListener('click', function () {
    var password = generatePassword();
    if (password) {
        passwordOutput.value = password;
    }
});
