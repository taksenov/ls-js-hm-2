// Написать функцию 'isAllTrue', которая принимает 2 параметра - 'source' и 'filterFn'
//
// source - массив
//
// 'filterFn' - фильтрующая функция
//
// Если фильтрующая функция вернет 'true' для ВСЕХ элементов массива, то и сама 'isAllTrue' вернет 'true'
//
// Если фильтрующая функция вернет 'false' хотя бы для одного элемента массива, то и сама 'isAllTrue' вернет 'false'
//
// пример:
// var allNumbers = [1, 2, 4, 5, 6, 7, 8],
// someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
// noNumbers = ['это', 'массив', 'без', 'чисел'];
// function isNumber(val) {
//   return typeof val === 'number';
// }
// console.log(isAllTrue(allNumbers, isNumber)); //вернет true
// console.log(isAllTrue(someNumbers, isNumber)); //вернет false
// console.log(isAllTrue(noNumbers, isNumber)); //вернет false


// Выбрасывать и обрабатывать исключение, если в 'source' пустой массив.

// Test variables
var allNumbers  = [1, 2, 4, 5, 6, 7, 8];
var emptyArray  = [];
var someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8];
var noNumbers   = ['это', 'массив', 'без', 'чисел'];

// Main func
function isAllTrue( source, filterFn ) {
    var booleanReturn = true;
    var sourceLength = source.length;

    // check for emty source
    try {
        if ( sourceLength === 0 || !Array.isArray(source) ) {
            throw new Error('SOURCE_EMPTY');
        }
    } catch (e) {
        if ( e.message === 'SOURCE_EMPTY') {
            console.error( 'Введен пустой массив!' );
            booleanReturn = false;
            return booleanReturn;
        } else {
            console.log( 'Ошибка!' );
        }
    }
    // check for emty source

    // check source array for filterFn Rule
    for (var i = 0; i < sourceLength; i++) {
        if ( !filterFn(source[i]) ) {
            booleanReturn = false;
            return booleanReturn;
        }
    }
    // check source array for filterFn Rule

    // return from isAllTrue func
    return booleanReturn;

} // isAllTrue

// Filter func
function isNumber(val) {
    return typeof val === 'number';
} // isNumber

//
console.log('allNumbers is TRUE ===');
console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log('------------------------------');

console.log('emptyArray ERROR MSG ===');
console.log(isAllTrue(emptyArray, isNumber)); //вернет error и false
console.log('------------------------------');

console.log('someNumbers is FALSE ===');
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log('------------------------------');

console.log('noNumbers is FALSE ===');
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
console.log('------------------------------');
