const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = { getItem: () => null, setItem: () => {} };

const cardsData = fs.readFileSync('js/cards-data.js', 'utf8');
eval(cardsData);

const card = window.CARDS_DATA['datastructures'][0];
const url = \`https://colab.research.google.com/github/shrutidoshi94/Cheatsheet_DataScience/blob/main/notebooks/\${card.notebook}\`;
console.log(url);
