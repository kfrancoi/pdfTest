var PDFDocument = require('pdfkit');
var fs = require('fs');

// create a document and pipe to a blob
var doc = new PDFDocument();
var stream = doc.pipe(fs.createWriteStream('output.pdf'));

// Title of the document
doc.fontSize(25);
doc.text('Questionnaire Result Page');

// Introduction
doc.moveDown();
doc.fontSize(13).fillColor('grey');
doc.text('Developed with Dr. Gregor Jemec, an expert in the area of hidradentis suppurativa and member of the HS Online Steering Committee, ...', {
       width: 410,
       align: 'justify',
   });
doc.fillColor('black');

// Start list of questions
doc.moveDown(3);

// Question 1
doc.fontSize(18);
doc.text('1) Quel âge avez-vous ?', {
       width: 410,
       align: 'justify'
   });
// Reponse
doc.moveDown(0.5);
doc.fontSize(14).font('Times-Italic').fillColor('green');
doc.text('30-39', {
       width: 410,
       align: 'justify',
       indent: 20
   });
doc.font('Helvetica').fillColor('black');
doc.moveDown();
// ==========
// Question 2
doc.fontSize(18);
doc.text('2) Veuillez sélectionner les zones où se situent vos lésions cutanées (nodules, furoncles...).', {
       width: 410,
       align: 'justify'
   });
// Reponse
doc.moveDown(0.5);
doc.fontSize(14).font('Times-Italic').fillColor('green');
doc.text('Front', {
       width: 410,
       align: 'justify',
       indent: 20
   });
doc.moveDown();

//Only show areas that have been clicked
var yPos = doc.y;
doc.image('images/left-arm.png', 85, yPos, {width:80});
doc.image('images/right-arm.png', 85+80+10, yPos, {width:80});
//doc.rect(85+80+10, yPos, 80, 80).fillOpacity(1).fill("grey");
doc.image('images/left-arm.png', 85+2*(80+10), yPos, {width:80});


doc.font('Helvetica').fillColor('black');

doc.end();