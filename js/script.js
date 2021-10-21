/* 
1. prompt (per quanti km vuoi viaggiare?) const
2. prompt (quanti anni hai?) const
3. calcolo del prezzo
4. sconto 20% minorenni
5. sconto 40% over 65
6. stampare prezzo finale biglietto con due decimali.
*/

const km = prompt('Per quanti km vuoi viaggiare?');

console.log(km);

document.getElementById('km').innerHTML = 
`
<p> Voglio viaggiare per ${km} km</p> 
`

const anni = prompt('Quanti anni hai?');

console.log(anni);

document.getElementById('anni').innerHTML =
`
<p> Ho ${anni} anni</p> 
`

// const prezzobiglietto = 


const numb = (km * 0.21);

console.log(numb);


const rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
console.log(rounded);


document.getElementById('numb').innerHTML =
`
<p>Il prezzo del biglietto è ${rounded}€</p> 
`





