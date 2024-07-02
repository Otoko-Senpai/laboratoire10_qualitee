const myApp = require('../src/app');

describe('Section 1', () => {
    beforeAll(() => {
        return "Début des Tests Section 1";
    });
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    test('adds 2 integer and the result is valid', () => {
        let number1 = getRandomInt(4);
        let number2 = getRandomInt(2);
        let total = myApp.sum(number1, number2);

        expect(total).toBe(number1 + number2);
    });
});
afterAll(() => {
    return "Fin des Tests Section 1";
});

describe('Section 2', () => {
    beforeAll(() => {
        return "Début des Tests Section 2";
    });
    test('verifier si laval et Palindrome', () => {
        let word = myApp.isPalindrome('laval');

        expect(word).toBe(true);
    });
    test('verifier si a et Palindrome', () => {
        let word = myApp.isPalindrome('a');

        expect(word).toBe(true);
    });
    test('verifier si aaaa et Palindrome', () => {
        let word = myApp.isPalindrome('aaaa');

        expect(word).toBe(true);
    });
    test('verifier si racecar et Palindrome', () => {
        let word = myApp.isPalindrome('racecar');

        expect(word).toBe(true);
    });
    test('verifier si ab est pas Palindrome', () => {
        let word = myApp.isPalindrome('ab');

        expect(word).toBe(false);
    });
    test('verifier si lauchcode est pas Palindrome', () => {
        let word = myApp.isPalindrome('launchcode');

        expect(word).toBe(false);
    });
    test('verifier si abA est pas Palindrome', () => {
        let word = myApp.isPalindrome('abA');

        expect(word).toBe(false);
    });
    test('verifier si so many dynamos est pas Palindrome', () => {
        let word = myApp.isPalindrome('so many dynamos');

        expect(word).toBe(false);
    });
});
afterAll(() => {
    return "Fin des Tests Section 2";
});

describe('Section 3', () => {
    beforeAll(() => {
        return "Début des Tests Section 3";
    });
    test('verifier la conversion Euro en JPY', () => {
        let valeurEuro = 100;
        let valeurJPY = 12790;

        expect(myApp.fromEuroToJapanYen(valeurEuro)).toEqual(valeurJPY);
    });
    test('verifier la conversion Euro en British Pound', () => {
        let valeurEuro = 100;
        let valeurBritish = 80;

        expect(myApp.fromEuroToBritish(valeurEuro)).toEqual(valeurBritish);
    });
    test('verifier la conversion Euro en USD', () => {
        let valeurEuro = 100;
        let valeurUSD = 120;

        expect(myApp.fromEuroToJapanYen(valeurEuro)).toEqual(valeurUSD);
    });
});
afterAll(() => {
    return "Fin des Tests Section 3";
});