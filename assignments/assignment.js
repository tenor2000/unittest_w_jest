export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function calculator() {
    return {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        },
        multiply: function (a, b) {
            return a * b;
        },
        divide: function (a, b) {
            return a / b;
        }
    }
}

export function caesarCipher(str, shift) {
    return str
        .split('')
        .map(char => {
            let code = char.charCodeAt();
            if (code >= 65 && code <= 90) {
                code = (code - 65 + shift) % 26 + 65;
            } else if (code >= 97 && code <= 122) {
                code = (code - 97 + shift) % 26 + 97;
            }
            return String.fromCharCode(code);
        })
        .join('');
}

export function analyzeArray(arr) {
    return {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}
