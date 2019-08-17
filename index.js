const pdfMakePrinter = require('pdfmake/src/printer');
const fs = require('fs')
var path = require('path');

const docDefinition = {
    content: [
        'abcdefghijklmnopqrstuvwABCDEFGHIJKLMNOPQRSTUVW',
        '0123456789',
    ],
    defaultStyle: {
        font: 'Consolas',
        fontSize: 18,
    }
};

var generatePdf = function (docDefinition, callback) {
    try {
        const fontDescriptors = {
            Consolas: {
                normal: './fonts/Consolas.ttf',
                bold: './fonts/Consolas.ttf',
                italics: './fonts/Consolas.ttf',
                bolditalics: './fonts/Consolas.ttf'
              },

        };
        const printer = new pdfMakePrinter(fontDescriptors);
        const doc = printer.createPdfKitDocument(docDefinition);

        doc.pipe(
            fs.createWriteStream('docs/filename.pdf').on("error", (err) => {
                console.error(err.message);
            })
        );
        doc.on('end', () => {
            console.log("PDF successfully created and stored");
        });
        doc.end();

    } catch (err) {
        throw (err);
    }
};

generatePdf(docDefinition, (response) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.send(response); // Buffer data
});