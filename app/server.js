// Petite boutique de démonstration, sans dépendance. Réglages par variables d'environnement :
//   LATENCE=1200   délai (ms) avant l'affichage des produits (défaut 300)
//   BUG=remise     le code ADC10 n'applique plus la remise (le défaut à repérer)
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4173;
const LATENCE = Number(process.env.LATENCE || 300);
const BUG = process.env.BUG || '';
const PRODUITS = [
  { id: 'clavier', nom: 'Clavier', prix: 50 },
  { id: 'souris', nom: 'Souris', prix: 25 },
];

http.createServer((req, res) => {
  if (req.url === '/api/produits') {
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ produits: PRODUITS, remiseActive: BUG !== 'remise' }));
    }, LATENCE);
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
}).listen(PORT, () => console.log(`Boutique de démonstration : http://localhost:${PORT}`));
