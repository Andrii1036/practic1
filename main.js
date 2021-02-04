console.log('-----------завдання 1------------');
// .Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
let str='привіт';
let num= 123;
let flag= true;
let txt= 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);


console.log('-----------завдання 2------------');
// Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,
// 5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3. 
let a1= 5+3;
let a2= 5-3; 
let a3= 5*3;
let a4= 5/3;
let a5= 5%3;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);


console.log('-----------завдання 3------------');
// Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг' 
let a6= 5%3; 
let a7= 3%5;
let a8= 5+'3';
let a9= '5'-3;
let a10= 75+'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);


console.log('-----------завдання 4------------');
// Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
let height=23;
let width=10;
let s= height*width;
console.log('площа='+s);


console.log('-----------завдання 5------------');
// Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v
let heightC=10;
let dC=4;
let pi=3.14;
let v= pi*((dC/2)**2)*heightC;
console.log(v);


console.log('-----------завдання 6------------');
// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n=3;
let m=4;
let k=Math.sqrt(n*n+m*m);
console.log(k);


console.log('-----------завдання 7------------');
// Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
let str1='Hello word';
document.write(str1 + '<br/>');
alert(str1);
console.log(str1);


console.log('-----------завдання 8------------');
// Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
let name= 'Ковалик Андрій Володимирович';
let age= '30';
let hobby= 'beer))';
alert(name+ '\n' +age+ '\n' +hobby+ ')))'+'\n');


console.log('-----------завдання 9------------');
// Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
let str11='хто ';
let str22='ти ' ;
let str33= 'такий?';
let concatenation= str11 +str22+str33;
document.write(concatenation);


console.log('-----------завдання 10------------');
// Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");
let str4= '20';
let a=5;
console.log('str+a = 25 стрінгою');
console.log('str-a = 25 числове');
console.log('str-a = 40 числове');
console.log('str-a = 10 числове');


console.log('-----------завдання 11------------');
// Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
//     parseInt("-7.875")
//     parseInt("435")
//     parseInt("Вася")
console.log('parseInt("3.14")' + '3');
console.log('parseInt("-7.875")' +'-7');
console.log('parseInt("435")' + '435');
console.log('parseInt("Вася")'+'NaN');


console.log('-----------завдання 12------------');
// С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
let str5 = prompt("Enter something","ho-ho");
console.log(str5);


console.log('-----------завдання 13------------');
// С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let z1 = +prompt('enter a');
let z2 = +prompt('enter b');
let rslt = z1+z2;
alert(rslt);


console.log('-----------завдання 14------------');
// С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let name1 = prompt('введіть ваше ім`я');
let surname = prompt('введіть ваше прізвище');
let age1 = +prompt('введіть ваш вік');
alert('доброго вечора '+name1+ ' ' +surname+ ','+ 'мої вітання що вам '+age1);



