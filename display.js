/**
 * Rezeptdaten direkt eingebettet (identisch zu rezepte.json).
 * So funktioniert die Seite auch per Doppelklick ohne lokalen Server -
 * ein direktes fetch('rezepte.json') wird vom Browser aus Sicherheitsgründen
 * blockiert, wenn die Datei per file:// geöffnet wird.
 */
const rezepteDaten = [
  { "id": 1, "name": "Gemüsepfanne", "zutaten": ["Zwiebel", "Paprika", "Reis"], "zubereitungszeit_min": 20, "ernaehrungskategorie": "vegetarisch" },
  { "id": 2, "name": "Hühnercurry", "zutaten": ["Hühnerbrust", "Kokosmilch", "Curry", "Reis"], "zubereitungszeit_min": 30, "ernaehrungskategorie": "omnivor" },
  { "id": 3, "name": "Linsensuppe", "zutaten": ["Linsen", "Karotte", "Zwiebel", "Sellerie"], "zubereitungszeit_min": 40, "ernaehrungskategorie": "vegan" },
  { "id": 4, "name": "Käsespätzle", "zutaten": ["Spätzle", "Käse", "Zwiebel"], "zubereitungszeit_min": 25, "ernaehrungskategorie": "vegetarisch" },
  { "id": 5, "name": "Lachs mit Gemüse", "zutaten": ["Lachs", "Brokkoli", "Zitrone"], "zubereitungszeit_min": 20, "ernaehrungskategorie": "pescetarisch" },
  { "id": 6, "name": "Vegane Buddha Bowl", "zutaten": ["Kichererbsen", "Quinoa", "Avocado", "Paprika"], "zubereitungszeit_min": 25, "ernaehrungskategorie": "vegan" },
  { "id": 7, "name": "Rindergulasch", "zutaten": ["Rindfleisch", "Zwiebel", "Paprika", "Paprikapulver"], "zubereitungszeit_min": 90, "ernaehrungskategorie": "omnivor" },
  { "id": 8, "name": "Omelette mit Spinat", "zutaten": ["Ei", "Spinat", "Käse"], "zubereitungszeit_min": 10, "ernaehrungskategorie": "vegetarisch" },
  { "id": 9, "name": "Falafel-Wrap", "zutaten": ["Kichererbsen", "Tortilla", "Salat", "Joghurtsauce"], "zubereitungszeit_min": 20, "ernaehrungskategorie": "vegetarisch" },
  { "id": 10, "name": "Pasta Aglio e Olio", "zutaten": ["Pasta", "Knoblauch", "Olivenöl", "Chili"], "zubereitungszeit_min": 15, "ernaehrungskategorie": "vegan" }
];

/**
 * Zeigt jeden Rezept-Datensatz als einzelnes Objekt an
 * - sowohl in der Browser-Konsole (als JS-Objekt)
 * - als auch sichtbar auf der Webseite (als Karte)
 */
function displayRezepte(rezepte) {
  const container = document.getElementById('rezept-container');
  container.innerHTML = '';

  rezepte.forEach((rezept) => {
    // Jedes Objekt einzeln in der Konsole ausgeben
    console.log('Rezept-Objekt:', rezept);

    // Jedes Objekt einzeln auf der Seite als Karte anzeigen
    const card = document.createElement('div');
    card.className = 'rezept-card';
    card.innerHTML = `
      <h2>${rezept.name}</h2>
      <p class="zutaten"><strong>Zutaten:</strong> ${rezept.zutaten.join(', ')}</p>
      <p><strong>Zubereitungszeit:</strong> ${rezept.zubereitungszeit_min} Minuten</p>
      <p><strong>Ernährungskategorie:</strong> ${rezept.ernaehrungskategorie}</p>
    `;
    container.appendChild(card);
  });
}

// Eingebettete Daten anzeigen (kein fetch nötig, funktioniert per Doppelklick)
console.log(`${rezepteDaten.length} Rezepte erfolgreich geladen.`);
displayRezepte(rezepteDaten);
