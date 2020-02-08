class GradeTable {
    constructor(tableElement, noGradesElement){
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades){
        for(var i=0; i<grades.length; i++){

            this.renderGradeRow(grades[i], this.deleteGrade);
        }
        
        if(grades.length===0){
            var p = document.querySelector("p");
            p[i].classList.remove("d-none"); 
            console.log(p);
        }
        
    }
    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }

    renderGradeRow(data, deleteGrade){

        var name = document.createElement("td");
        name.textContent = data.name;
        var course = document.createElement("td");
        course.textContent = data.course;
        var grade = document.createElement("td");
        grade.textContent = data.grade;


        var button = document.createElement("button");
        button.textContent = "Delete";
        var operations = document.createElement("td");
            
        operations.append(button);

        var row = document.createElement("tr");
        row.append(name);
        row.append(course);
        row.append(grade);
        row.append(operations);
        tbody.append(row);

        button.addEventListener("click", function(){
            deleteGrade(data.id);
        });
    }
}
