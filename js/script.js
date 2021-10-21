/* 
1. prompt (per quanti km vuoi viaggiare?) const
2. prompt (quanti anni hai?) const
3. calcolo del prezzo
4. sconto 20% minorenni
5. sconto 40% over 65
6. stampare prezzo finale biglietto con due decimali.
*/

const km = prompt('Per quanti km vuoi viaggiare?');

const intkm = parseInt(km);

console.log(intkm);


console.log(km);

document.getElementById('km').innerHTML = 
`
<p> Questo viaggio ha una lunghezza di ${intkm} km</p> 
`

const anni = prompt('Quanti anni hai?');

console.log(anni);

document.getElementById('anni').innerHTML =
`
<p> L'utente ha ${anni} anni</p> 
`



const numb = (intkm * 0.21);

console.log(numb);


// const rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
// console.log(rounded);

const rounded = numb.toFixed(2);

document.getElementById('numb').innerHTML =
`
<p>Il prezzo del biglietto è ${rounded}€</p> 
`


const età = anni;

if (età < 18) {
  const sconto20 = (rounded - (rounded / 100 * 20));
  const rounded20 = sconto20.toFixed(2);

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
  const rounded40 = sconto40.toFixed(2);
  document.getElementById('sconto').innerHTML =
  `
  <p> L'utente ha diritto allo sconto per gli over60 <br>
  Il prezzo scontato è ${rounded40}€ </p>
  `;
}

