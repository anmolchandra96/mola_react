let csvToJson = require('convert-csv-to-json');
let fileInputName = 'mfq_question.csv';
let fileOutputName = 'output.json';

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);