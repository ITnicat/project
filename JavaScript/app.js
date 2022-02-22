//1. Variables let, const, var; camelCase rule
// let answerToQuestion = 5;
// const answerFirst = 6;
// const obj = {
//     a: 6
// };
// obj.a = 7;
// console.log(obj.a);

//2. Data types 
//Simple Data Types and Objects
//Simple Data Types: numbers, strings, booleans: true or false, null, undefined, symbols, bigInt
//Objects: Arrays, Objects, Functions

//3. Simple talking with users
//alert('');
//confirm('Are you here?'); if 'ok' then true, if cancel then 'false';
//prompt('How old are you?', 'placeholder');
//typeof();
//+ gives us number not string

//4. Concatenation and iterpolation
// console.log('Hello' + ' ' + 'Nick'); //concatenation
// let nameMain = 'Nick';
// console.log(`Hello ${nameMain}`); //interpolation

//5. Operators
// let incr = 10,
//     decr = 10;
    
// console.log(incr++);
// console.log(++incr);

//length
//toUpperCase() and toLowerCase()
//indexOf()
//slice()
//substring()
//substr()
//Math.round() Math.floor Math.
//parseInt()
//parseFloat()


//callback functions


//Objects

//const person = new Object();
// const person = {
//     name: "Nijat",
//     age: 22,
//     profession: "front-end developer",
//     address: "Baku",
//     color: {
//         main: "red",
//         second: "blue"
//     }
// };
//delete
//for in
// for(let key in person){
//     if(typeof(person[key]) === 'object'){
//         for(let i in person[key]){
//             // console.log(`${i} = ${person[key][i]}`);
//         }
//     } else{
//     // console.log(`${key} = ${person[key]}`);
// }}

//Object.keys

// console.log(Object.keys(person));

//Object.keys.length

//destruktizasiya

// const {main, second} = person.color;

//massivs
//pop and push, shift and unshift
//for of
// let arr = [1,22,3,14];
// for(let value of arr){
//     console.log(value);
// }
//forEach we can not use break and continue but in for of we can
// arr.forEach((item, i, arr)=>{
//     console.log(`${i}: ${item} in massiv ${arr}`);
// });

//split, join setre cevirir massivi, sort
// let a = 'alma, armud, kok';
// console.log(a);
// let b = console.log(a.split(",").join(","));

// console.log(arr.sort(sirala));
// function sirala(a,b){
//     return a-b;
// }

//tranfer by link and transfer by value
// let a = 5,
// b = a;
// b = b + 5; 
// console.log(b, a); // by value

// const obj = {
//     a: 5,
//     b: 4,
//     c: 3
// };

// const newObj = obj;
// newObj.a = 10;
// console.log(obj);
// console.log(newObj); 

// function copy(obj){
//     let objCopy = {};
//     let key;
//     for(key in obj){
//         objCopy[key] = obj[key];
//     }
//     return objCopy;
// }

// const mainObj = {
//     a: 5,
//     b: 6, 
//     c: 3
// };

// const copyObj = copy(mainObj);
// copyObj.a = 10;
// console.log(copyObj);
// console.log(mainObj);

// //adding object to object
// const add = {
//     d: 19,
//     e: 28
// };
//  Object.assign(mainObj, add);
//  console.log(mainObj);

// const copyAdd = Object.assign({}, add);
// copyAdd.d = 10;
// console.log(copyAdd);
// console.log(add);

// //copying of arrays
// let arrNew = ['a', 'b', 'c'];
// let arrCopy = arrNew.slice();
// arrCopy[1] = 'd';
// console.log(arrCopy);
// console.log(arrNew);

// //addying arrays in ES8
// let front = ['js', 'css', 'html'];
// let back = ['python', 'php'];
// let full = [...front,...back, 'testing'];
// console.log(full);

// //replacing
// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// let num = [2,5,6];
// log(...num);

// //spread operator

// let x = ['Ayxan', 'Suleyman'];
// let y = [...x];
// y[1] = 'Nijat';
// console.log(y);
// console.log(x); 

// let objX = {
//     person: 'Ayxan',
//     age: 23,
//     profession: 'IT developer'
// };

// let objY = {...objX};
// objY.person = 'Nijat';
// console.log(objY);
// console.log(objX);

//prototypes

// const footballer = {
//     rating: 99,
//     position: 'striker'
// };
// const ronaldo = {
//     rating: 93
// };
// ronaldo.__proto__ = footballer;
// console.log(ronaldo.position);
// Object.setPrototypeOf(ronaldo,footballer);
// console.log(ronaldo.position);

// const messi = Object.create(footballer);
// messi.position = 'midfielder';
// console.log(messi.position);

//to string 
// let a = 5;
// console.log(typeof(a));
// console.log(typeof(String(a)));

// const box = document.getElementById("box");

// const buttons = document.getElementsByTagName("button");
// console.log(buttons);

// const buttons = document.querySelectorAll('button');
// buttons.forEach(item => {
//     item.style.backgroundColor = 'red';
// });

// buttons.style.cssText = "background-color: blue";
// buttons.forEach((item, index) =>{
//     if(index == 2){
//         item.style.backgroundColor = 'red';
//     }
// });

//document.createElement('');
// const div = document.createElement('div');
// const text = document.createTextNode('Hello World'); //rarely used method

// div.classList.add('black');

// document.body.append(div); //to the end of body old version is appendChild
//prepend

// box[0].before(div); .after
//old version is insertBefore (adding element, before which element)

//button[3].remove();
//parent.removeChild(chilc[2]);

//box[0].replaceWith(button[2]);
//parent.replaceChild(changing, child);

//innerHTML 
//div.innerHTML = "<h1>Hello</h1>";
//div.textContent = "";

//div.insertAdjacentHTML('afterend, beforeend, afterbegin, beforebegin', '<h1>hello</h1>');

// const button = document.getElementById('btn');
// function change(){
//     button.innerHTML = 'Unclick';
// }

// button.onclick = function(){
//     alert('Salam');
// };

// button.addEventListener('click', ()=>{
//     if(button.innerHTML === 'Click'){
//         button.innerHTML = 'Ayxan Agilli ol';
//     } else if(button.innerHTML === 'Ayxan Agilli ol'){
//         button.innerHTML = 'Suleyman Agilli ol';
//     }
// });

//also mouseenter, 

// button.addEventListener('click', (e)=>{
//     e.target.remove(button);
// });

//removeEventListener stopping 

//event.preventDefault();

//parents and child
// console.log(document.body);
// console.log(document.documentElement); //HTML
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector("#tema").parentNode);
// console.log(document.querySelector("#tema").parentElement);
// console.log(document.querySelector("#tema").parentNode.parentNode);
// console.log(document.querySelector("[data-current='3']"));
// console.log(document.querySelector("[data-current='3']").nextSibling);
// console.log(document.querySelector("[data-current='3']").nextElementSibling);


//mobile
// window.addEventListener("DOMContentLoaded", ()=>{
//     const box = document.querySelector('.box');
//     box.addEventListener('touchstart', (e)=>{
//         e.preventDefault();
//         console.log('Start');
//     });
//     box.addEventListener('touchmove', (e)=>{
//         e.preventDefault();
//         console.log('Move');
//     });
//     box.addEventListener('touchend', (e)=>{
//         e.preventDefault();
//         console.log('End');
//     });
    //touchenter, touchleave, touchcancel , touches, targettouches, changedtouches
// });











