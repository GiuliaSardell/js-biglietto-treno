/* 
1. prompt (per quanti km vuoi viaggiare?) const
2. prompt (quanti anni hai?) const
3. calcolo del prezzo
4. sconto 20% minorenni
5. sconto 40% over 65
6. stampare prezzo finale biglietto con due decimali.
*/

const km = prompt('Per quanti km vuoi viaggiare?');

// const int = parseInt("km");

// console.log(int);


console.log(km);

document.getElementById('km').innerHTML = 
`
<p> Questo viaggio ha una lunghezza di ${km} km</p> 
`

const anni = prompt('Quanti anni hai?');

console.log(anni);

document.getElementById('anni').innerHTML =
`
<p> L'utente ha ${anni} anni</p> 
`



const numb = (km * 0.21);

console.log(numb);


const rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
console.log(rounded);


document.getElementById('numb').innerHTML =
`
<p>Il prezzo del biglietto è ${rounded}€</p> 
`


const età = anni;

if (età < 18) {
  const sconto20 = (rounded - (rounded / 100 * 20));
  const rounded20 = Math.round((sconto20 + Number.EPSILON) * 100) / 100;

  document.getElementById('sconto').innerHTML =
  `
  <p> L'utente ha diritto allo sconto per minorenni <br>
  Il prezzo scontato è ${rounded20} </p>
  `;

} else if(età >= 18 && età < 60) {
  document.getElementById('sconto').innerHTML =
  `
  <p> L'utente non ha diritto allo sconto </p>
  ` ;

} else {
  const sconto40 = (rounded - (rounded / 100 * 40));
  const rounded40 = Math.round((sconto40 + Number.EPSILON) * 100) / 100;
  document.getElementById('sconto').innerHTML =
  `
  <p> L'utente ha diritto allo sconto per gli over60 <br>
  Il prezzo scontato è ${rounded40}€ </p>
  `;
}

