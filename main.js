var form = document.querySelector("form");
var gradeForm = new GradeForm(form);

var header =  document.querySelector("span");
var pHeader = new PageHeader(header);

var pElement = document.querySelector("p");
var tbody = document.querySelector("tbody");
var gradeTable = new GradeTable(tbody, pElement);

var app = new App(gradeTable, pHeader, gradeForm);
app.start();

