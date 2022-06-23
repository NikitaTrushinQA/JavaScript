// HW_2_JS:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let b = 2
for(let i=1;i<=10;i++){
    console.log(" 2 в степени " + i + " = "+ b**i)
}
//______________________________________________________________________________________________________________________
// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const exponentiation = function(num)
{
let b = 2
for(let i=1;i<=num;i++){
    console.log(" 2 в степени " + i + " = "+ b**i)
}
}
exponentiation(5)
//___________________________________________________________________________________________

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

result = ''
for(let i = 1;i<=5;i++)
{
    result+=':)'
    console.log(result)
}
//________________________________________________________________________________________________________________________

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

result=''
const stroka =function(str,num)
{
    for(let i = 1;i<=num;i++)
{
    result+=str
    console.log(result)
}
}
//stroka('str',num)
//stroka('ура',3)
//_______________________________________________________________________________________________________________________

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

counter_1 =0                             //счетчик гласных букв
counter_2 =0                             //счетчик согласных букв
function getWordStructure(word)
{
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) 
        {
            if(word[i].match(/[eyuioa]/))
            {
                counter_1+=1
            }
            else if(word[i].match(/[qwrtpsdghjklzxcvbnm]/))
            {
                counter_2+=1
            }


        }
console.log(" Слово " + word + " состоит из " + counter_1 + " гласных и "+ counter_2+ " согласных букв ")
}
//для проверки:
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')
//_______________________________________________________________________________________________
// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word)
{
    let reversed_word = word.split("").reverse().join("")  //разделяем на буквы ,переворачиваем и собираем в строку
    if(word.toLowerCase()==reversed_word.toLowerCase())
    {
        return 'word is palindrom'
    }
    else
    {
        return 'word is not palindrom'
    }

}
let result = isPalindrom('aBba')
console.log(result)