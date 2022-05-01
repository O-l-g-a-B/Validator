class Validator {
    constructor() {}
    isEmail(test) {
        let email = test.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
        return email === null ? false : true;
    }

    isDomain(test) {
        return ((test.indexOf('.ru') !== -1) || (str.indexOf('.com') !== -1));
    }

    isDate(test) {
        let date = test.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }

    isPhone(test) {
        let phone = test.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return phone === null ? false : true;
    }
}

//стандартная 
let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(921)123-45-67')); //тут используем формат своей страны


class ValidatorStatic {

    static isEmail(test) {
        let email = test.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
        return email === null ? false : true;
    }

    static isDomain(test) {
        return ((test.indexOf('.ru') !== -1) || (test.indexOf('.com') !== -1))
    }

    static isDate(test) {
        let date = test.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }

    static isPhone(test) {
        let phone = test.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return phone === null ? false : true;
    }
}
//статическая
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны