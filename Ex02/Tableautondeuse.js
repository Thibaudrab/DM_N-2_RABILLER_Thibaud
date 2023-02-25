const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();
const filename = 'tondeuse.csv';

writer.pipe(fs.createWriteStream(filename));

writer.write({
  Id: 'Id',
  'Nom de la tondeuse': 'Nom de la tondeuse',
  Puissance: 'Puissance',
  Autonomie: 'Autonomie',
  Energie: 'Energie'
});

const nomsDeTondeuses = ['Greencut', 'LawnMower Pro', 'Garden Master', 'Turf Warrior', 'Lawn Hero', 'Mac allister', 'Toro'];

const puissances = ['800W', '1000W', '1200W', '1500W', '2000W','500'];

const autonomies = ['40 minutes', '60 minutes', '80 minutes', '100 minutes', '120 minutes'];

const energies = ['Electrique', 'Thermique', 'Hybride','Diesel'];

for (let i = 1; i <= 19; i++) {
  const nomDeTondeuse = nomsDeTondeuses[Math.floor(Math.random() * nomsDeTondeuses.length)];
  const puissance = puissances[Math.floor(Math.random() * puissances.length)];
  const autonomie = autonomies[Math.floor(Math.random() * autonomies.length)];
  const energie = energies[Math.floor(Math.random() * energies.length)];
  
  writer.write({
    Id: i,
    'Nom de la tondeuse': nomDeTondeuse,
    Puissance: puissance,
    Autonomie: autonomie,
    Energie: energie
  });
}

writer.end();
console.log(`The data has been written to ${filename}`);