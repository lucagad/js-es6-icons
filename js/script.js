// **Milestone 1**
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

// **Milestone 2**
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// **Milestone 3**
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// **BONUS**
// 1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

// 2- popolare le options della select della milestone 3 dinamicamente.

// **Consigli del giorno**

// Come sempre, iniziamo prima di tutto dall’analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.

// Le icone presenti nella struttura dati fanno riferimento alla nota libreria 

// **Font Awesome**, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell’head della pagina.
// Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag `<i>` di un’icona qualsiasi, in particolare **focalizziamoci sulle classi**.

// Come possiamo usare i dati presenti nella nostra struttura dati per creare l’elemento html nel modo corretto e visualizzare l’icona in pagina?

// Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all’interno l’icona e uno span con il nome. 

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

// Assegno alla costante l'elemento container in cui andranno stampate le card delle icone
const iconsContainer = document.querySelector (".icons_catalogue");

// Stampo in pagina tutti gli elementi dell'array
iconsCollection.forEach(element => {

  iconsContainer.innerHTML += `
    <div class="col">
      <div class="card shadow-sm d-flex justify-content-center align-items-center py-4">
        <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color};"></i>

        <div class="card-body">
          <p class="icon_name card-text text-center">${element.name}</p>
        </div>
      </div>
    </div>
  `;

  
});