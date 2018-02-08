var path = require('path');
var Excel = require('exceljs');
var workbook = new Excel.Workbook(); 

workbook.xlsx.readFile('/Users/vasu4you/eclipse-workspace/SCL/data/sample.xlsx')
    .then(function() {
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(2);       
        var cell = worksheet.getCell;
        row.eachCell(function(cell, colNumber) {
        	    if(colNumber == 1) {
            console.log(cell.value);
            }
        });
    });