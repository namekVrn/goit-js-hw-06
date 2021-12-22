const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elem = document.querySelector('ul#ingredients')
 // Новый способ черч map
const list = ingredients.map((value)=>{    
  const test = `<li>${value}</li>`;
  elem.insertAdjacentHTML('beforeend',test )
  
})

//Старый способ через for :)
// for(let i = 0; i < ingredients.length -1; i+=1){ 
//   const newElem = document.createElement('li')
//   newElem.textContent = ingredients[i]
//   newElem.classList.add('item')
//   elem.append(newElem)
// }



const planets = ["Земля", "Марс", "Венера", "Юпитер"];
const result = planets.map((value, number)=>{return console.log(`${number}, ${value}`) })