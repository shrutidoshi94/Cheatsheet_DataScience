const fs = require('fs');
const cardsData = fs.readFileSync('js/cards-data.js', 'utf8');
const context = { window: {} };
require('vm').runInNewContext(cardsData, context);
const card = context.window.CARDS_DATA['datastructures'][0];
const url = `https://colab.research.google.com/github/shrutidoshi94/Cheatsheet_DataScience/blob/main/notebooks/${card.notebook}`;
console.log("Notebook:", card.notebook);
console.log("URL:", url);
