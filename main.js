var header =  document.querySelector("span");
var pHeader = new PageHeader(header);

console.log(pHeader);

var tbody = document.querySelector("tbody");
var gradeTable = new GradeTable(tbody);

var app = new App(gradeTable);
app.start();

