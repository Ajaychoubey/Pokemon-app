let pokedex = null;
const textField = document.querySelector('input');
let image_state = 'large';
let animate = document.querySelector('.animate');
const info = document.querySelector('.info');
const brokenData = [
  {
    'name': 'Mr. Mime',
    'correctUrlName': 'mr-mime'
  },
  {
    'name':'Mime Jr.',
    'correctUrlName': 'mime-jr'
  }
];


function getPokemon(name){
  let pokemon;
  pokedex.forEach(_pokemon => {
    if(_pokemon.name.toLowerCase() === name.toLowerCase()) pokemon = _pokemon;
  });
  return pokemon;
}


(async () => {
  const url = 'https://raw.githubusercontent.com/joseluisq/pokemons/master/pokemons.json';
  const response = await fetch(url);
  const json = await response.json();
  const data = await json;
  pokedex = data.results;
})();


function init(){

  brokenData.forEach(data => fix( data.name, data.correctUrlName ))

  const image = document.querySelector('img');
  const pokemon = getPokemon(textField.value);
  
  image.src = (pokemon.sprites[image_state]);
  
  image.width = 220;
  image.height = 220;

  info.style = InfoStyle;

  animate.innerHTML = image_state === 'large' ? 'animated' : 'large';

  InfoMaker.forEach(info => makeInfo(info.label, info.className));
  
}
function makeInfo(label,className,style = `color:#000;font-size: 30px;top: 20%;`){
  const pokemon = getPokemon(textField.value);
  const element = document.querySelector('.'+className);

  element.innerHTML = `${label}: ${pokemon[className]}`;
  element.style = style;
  
}

const InfoMaker = [
  {
    label: 'Name',
    className: 'name'
  },
  {
    label: 'Type',
    className: 'type'
  },
  {
    label: 'HP',
    className: 'hp'
  },
  {
    label: 'Speed',
    className: 'speed'
  }
]
animate.onclick = () => {
  if( pokedex !== null ){
    image_state = image_state === 'large' ? 'animated' : 'large';
    init();
  }
}
textField.onchange = () => {
  pokedex !== null ? init() : false;
}