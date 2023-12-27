// test.js

function test() {
  console.log("Test");

  const fs = require('fs');
  const path = require('path');

  // Pfad zur aktuellen Ausführungsdatei
  const currentFilePath = import.meta.url.substring(7);
  const currentDirectory = path.dirname(currentFilePath);

  // Inhalt der Textdatei
  const fileContent = 'Hallo, das ist der Inhalt der Textdatei!';

  // Name der Textdatei
  const fileName = 'output.txt';

  // Vollständiger Pfad zur Textdatei
  const filePath = path.join(currentDirectory, fileName);

  // Textdatei schreiben
  fs.writeFileSync(filePath, fileContent);

  console.log(`Die Datei wurde erfolgreich erstellt: ${filePath}`);

}
