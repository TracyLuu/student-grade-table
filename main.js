var header =  document.querySelector("header");
var pHeader = new PageHeader(header);

var tbody = document.querySelector("tbody");
var gradeTable = new GradeTable(tbody);

var app = new App(gradeTable);
app.start();

