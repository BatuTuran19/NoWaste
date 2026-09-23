const fs = require('fs');
const path = require('path');

/**
 * Liest die Rezept-Datenstruktur aus der rezepte.json Datei ein.
 * @param {string} filePath - Pfad zur JSON-Datei (Standard: ./rezepte.json)
 * @returns {Array<Object>} Array von Rezept-Objekten
 */
function readRezepte(filePath = path.join(__dirname, 'rezepte.json')) {
  try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const rezepte = JSON.parse(rawData);
    console.log(`${rezepte.length} Rezepte erfolgreich eingelesen.`);
    return rezepte;
  } catch (error) {
    console.error('Fehler beim Einlesen der Rezeptdaten:', error.message);
    return [];
  }
}

// Test-Ausführung: Datei einlesen und Ergebnis in der Konsole ausgeben
const rezepte = readRezepte();
console.log(rezepte);

module.exports = { readRezepte };
