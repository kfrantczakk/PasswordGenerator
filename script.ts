// ELEMENTY HTML
const passwordLengthInput = document.getElementById('password-length') as HTMLInputElement;
const includeLowercase = document.getElementById('lowercase') as HTMLInputElement;
const includeUppercase = document.getElementById('uppercase') as HTMLInputElement;
const includeNumbers = document.getElementById('numbers') as HTMLInputElement;
const includeSpecial = document.getElementById('specials') as HTMLInputElement;
const passwordOutput = document.getElementById('password-otp') as HTMLInputElement;
const generatePasswordButton = document.getElementById('generate-password') as HTMLButtonElement;
const copyPasswordButton = document.getElementById('copy') as HTMLButtonElement;

// GENEROWANIE HASŁA FUNKCJA
function generatePassword(): string {
    const length = parseInt(passwordLengthInput.value);
    let characters = '';

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

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// GENEROWANIE HASŁA PRZYCISK
generatePasswordButton.addEventListener('click', () => {
    const password = generatePassword();
    if (password) {
        passwordOutput.value = password;
    }
});

// KOPIOWANIE HASŁA
copyPasswordButton.addEventListener('click', () => {
    const password = passwordOutput.value;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert('Hasło skopiowane do schowka!');
        }).catch((err) => {
            console.error('Błąd kopiowania', err);
        });
    }
});
