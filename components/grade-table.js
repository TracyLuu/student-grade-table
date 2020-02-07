class GradeTable {
    constructor(tableElement){
        this.tableElement = tableElement;
    }
    updateGrades(grades){

        for(var i=0; i<grades.length; i++){
            var name = document.createElement("td");
            name.textContent = grades[i].name;
            var course = document.createElement("td");
            course.textContent = grades[i].course;
            var grade = document.createElement("td");
            grade.textContent = grades[i].grade;

            var row = document.createElement("tr")
            row.append(name);
            row.append(course);
            row.append(grade);
            tbody.append(row);
        }

    }
}