// ** Milestone 1 ** OK
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

// ** Milestone 2 ** OK
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// ** Milestone 3 ** OK
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// ** BONUS **
// 1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

// 2- popolare le options della select della milestone 3 dinamicamente.

// **Consigli del giorno**

// Come sempre, iniziamo prima di tutto dall’analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.

// Le icone presenti nella struttura dati fanno riferimento alla nota libreria 

// Solamente quando la parte logica è completa, ci dedichiamo al css.


// Array di oggetti icon
const iconsCollection = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// BONUS 2 - Nuovo array per le option da utilizzare nella select
const selectValueOption = [];

// Assegno alla costante l'elemento container in cui andranno stampate le card delle icone
const iconsContainer = document.querySelector (".icons_catalogue");

// Assegno alla costante il valore dell'elemento scelto nella select
const selectElement = document.querySelector(".select_icons");


// Varibile che contine il valore della select
let selectValue = "";
let iconsSelected = [];

// Richiamo la funzione di generazione dei colori random
randomColor(iconsCollection);
console.log("Icon Array --->",iconsCollection);

setSelectValue(iconsCollection);
console.log("Select Option --->",selectValueOption);


// Richiamo la funzione di stampa delle card
stampCard(iconsCollection,iconsContainer);


// Varia il valore della variabile al click di un nuovo elemento della select
selectElement.addEventListener("change", function() {

  // Svuoto l'array delle icone selezionate ed l'innerHTML del container
  iconsContainer.innerHTML = "";
  
  // Svuoto l'array delle icone selezionate in precedenza
  iconsSelected = [];
  
  selectValue = selectElement.value;

  if (selectValue != "all"){

    selectIcons (iconsCollection,selectValue);
    stampCard(iconsSelected,iconsContainer);

  } else {

    stampCard(iconsCollection,iconsContainer);

  }
  

});


// BONUS 2 - Valori di Option dinamici in base al contenuto dell'array
function setSelectValue(arrayElement){

  arrayElement.forEach(element => {
    
      if (!selectValueOption.includes(element.type)) {
        selectValueOption.push(element.type);
				selectElement.innerHTML += `<option value="${element.type}" >${element.type}</option>`
      }
    });
  };


// Funzione che passato l'array delle icone ed il tipo da selezionare push all'interno dell'array iconsSelected gli oggetti che rispecchiano la selezione
function selectIcons(arrayIcon,typeIcons){

  iconsSelected = arrayIcon.filter((element) => {

    return element.type === typeIcons;

  });

};

// Funzione che passato un Array di oggetti ed il container stampa nel container tutti gli elementi dell'array
function stampCard(arrayElement,container){
  
  arrayElement.forEach(element => {

    container.innerHTML += `
    <div class="col">
      <div class="card d-flex justify-content-center align-items-center py-4">
        <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color};"></i>

        <div class="card-body">
          <p class="icon_name card-text text-center">${element.name}</p>
        </div>
      </div>
    </div>
  `;
  });
};

//Genera colori random ed gli va a sovrascrivere alla proprietà color di ogni oggetto presente nell'array
function randomColor(arrayElement){

  arrayElement.forEach(element => {
    element.color = "#" + Math.floor(Math.random()*16777215).toString(16);
  });
}

