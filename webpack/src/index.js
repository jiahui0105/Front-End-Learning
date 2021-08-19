import css from './css/style.css';
import scss from './scss/style.scss';
// import $ from 'jquery';

let json = require('../author.json');
var oDiv1 = document.getElementById('div1');
// oDiv1.innerHTML = 'hello world11111';
$('#div1').html(`hello${json.name},${json.age}`);


// let a = 10;
// let b = (c)=>{
//     console.log(c);
// };
// b(a);