const XLSX = require('xlsx');
const fs = require('fs');

const ruData = JSON.parse(fs.readFileSync('./src/lang/ru.json', 'utf8'));
const enData = JSON.parse(fs.readFileSync('./src/lang/en.json', 'utf8'));

const combinedData = { ...ruData, ...enData };

const sheetData = Object.keys(combinedData).map(key => ({
    Key: key,
    Russian: ruData[key][0].value,
    English: enData[key][0].value,
}));

const workbook = XLSX.utils.book_new();
workbook.creator = 'Developer';
workbook.lastModifiedBy = 'Developer';
workbook.created = new Date();

const worksheet = XLSX.utils.json_to_sheet(sheetData);

XLSX.utils.book_append_sheet(workbook, worksheet, 'Translations');

XLSX.writeFile(workbook, 'translations.xlsx');

console.log('JSON to Excel conversion completed.');
