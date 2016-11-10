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
    var n = 0;
    var booleanReturn = true;
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
                if ( !filterFn(source[n]) ) {
                    throw new Error('THIS_IS_FALSE');
                }
                ++n;
                checkSourceArrayElement(  );
            }

        } catch (e) {
            if ( e.message === 'THIS_IS_FALSE') {
                booleanReturn = false;
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

} // isAllTrue

// Filter func
function isNumber(val) {
    return typeof val === 'number';
} // isNumber

//
console.log('allNumbers is TRUE ==='); //вернет true
console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log('------------------------------'); //вернет true

console.log('emptyArray ERROR MSG ==='); //вернет true
console.log(isAllTrue(emptyArray, isNumber)); //вернет true
console.log('------------------------------'); //вернет true

console.log('someNumbers is FALSE ==='); //вернет false
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log('------------------------------'); //вернет true

console.log('noNumbers is FALSE ==='); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false
console.log('------------------------------'); //вернет true
