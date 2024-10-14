const fs = require('fs');

// Odczyt liczby obiektów
const count = Number(process.argv[2]); 
let carBrands = [];
let bookTitles = [];
let names = []; // Dodaj zmienną do przechowywania imion

// Funkcja do generowania losowych dat
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Funkcja do generowania numeru rejestracyjnego
function randomLicensePlate() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    return `${letters.charAt(Math.floor(Math.random() * letters.length))}${numbers.charAt(Math.floor(Math.random() * numbers.length))}${numbers.charAt(Math.floor(Math.random() * numbers.length))}-${numbers.charAt(Math.floor(Math.random() * numbers.length))}${numbers.charAt(Math.floor(Math.random() * numbers.length))}${numbers.charAt(Math.floor(Math.random() * numbers.length))}`;
}

// Odczyt danych o markach samochodów
fs.readFile('./car-brands.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    carBrands = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);
    
    // Odczyt danych o tytułach książek
    fs.readFile('./book-titles.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        bookTitles = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);
        
        // Odczyt danych o imionach
        fs.readFile('./names.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            names = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);

            let content = "export const data = [";
            
            for (let i = 0; i < count; i++) {
                const randomName = names[Math.floor(Math.random() * names.length)]; // Losowanie imienia
                const randomCarBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
                const randomBookTitle = bookTitles[Math.floor(Math.random() * bookTitles.length)];
                const id = i + 1; // Generowanie unikalnego id
                const birthDate = randomDate(new Date(1950, 0, 1), new Date(2003, 11, 31)).toISOString().split('T')[0]; // Losowa data urodzenia
                const licensePlate = randomLicensePlate(); // Losowy numer rejestracyjny

                // Dodawanie obiektu do zawartości
                content += `{
                    id: ${id},
                    carBrand: "${randomCarBrand}",
                    bookTitle: "${randomBookTitle}",
                    birth: "${birthDate}",
                    name: "${randomName}",
                    licensePlate: "${licensePlate}"
                },`;
            }
            
            content += "];"
            
            // Zapis łańcucha do pliku 
            fs.writeFile('module-data.js', content, (err) => {
                if (err) {
                    console.error(err);
                }
                console.log("module-data.js generated");
            });
        });
    });
});
