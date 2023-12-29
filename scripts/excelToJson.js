const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('translations.xlsx');

const ruData = {};
const enData = {};

const sheetName = workbook.SheetNames[0];

XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]).forEach((row) => {
    const key = row.Key;
    ruData[key] = [{ type: 0, value: row.Russian }];
    enData[key] = [{ type: 0, value: row.English }];
});

fs.writeFileSync('./src/lang/ru.json', JSON.stringify(ruData, null, 2));
fs.writeFileSync('./src/lang/en.json', JSON.stringify(enData, null, 2));

console.log('Excel to JSON conversion completed.');
