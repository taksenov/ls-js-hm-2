// ДЗ - 2
// Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'source' и 'filterFn'
// 'source' - массив
// 'filterFn' - фильтрующая функция
//
// Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
// Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'
// Всё должно быть реализовано с использованием чистого js (не используя сторонние библиотеки).
// Так же, нельзя использовать методы для работы с массивами.
// пример:
//
// console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
// console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
// console.log(isSomeTrue(noNumbers, isNumber)); //вернет false

// Test variables
var allNumbers  = [1, 2, 4, 5, 6, 7, 8];
var someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8];
var noNumbers   = ['это', 'массив', 'без', 'чисел'];

// Main func
function isSomeTrue( source, filterFn ) {
    var n = 0;
    var booleanReturn = false;
    var sourceLength = source.length;

    // check for emty source
    try {
        if (  source.length === 0 ) {
            throw new Error('SOURCE_EMPTY');
        }
    } catch (e) {
        if ( e.message === 'SOURCE_EMPTY') {
            console.log( 'Введен пустой массив!' );
            booleanReturn = false;
            return booleanReturn;
        } else {
            console.log( 'Ошибка!' );
        }
    } // check for emty source

    // check source array for filterFn Rule
    function checkSourceArrayElement(  ) {
        try {
            if ( n < source.length ) {
                if ( filterFn(source[n]) ) {
                    throw new Error('THIS_IS_TRUE');
                }
                ++n;
                checkSourceArrayElement(  );
            }

        } catch (e) {
            if ( e.message === 'THIS_IS_TRUE') {
                booleanReturn = true;
                return booleanReturn;
            } else {
                console.log( 'Ошибка!' );
            }
        }
    } //checkSourceArrayElement
    checkSourceArrayElement(  );
    // check source array for filterFn Rule

    // return from isAllTrue func
    return booleanReturn;

} // isSomeTrue

// Filter func
function isNumber(val) {
    return typeof val === 'number';
} // isNumber

//
console.log('allNumbers is TRUE ===');
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log('------------------------------');

console.log('emptyArray ERROR MSG ===');
console.log(isSomeTrue(emptyArray, isNumber)); //Выведет Ошибку и вернет false
console.log('------------------------------');

console.log('someNumbers is FALSE ===');
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log('------------------------------');

console.log('noNumbers is FALSE ===');
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
console.log('------------------------------');
