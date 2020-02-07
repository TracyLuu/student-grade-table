class App {
    constructor(gradeTable){
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.gradeTable = gradeTable;
    }
    handleGetGradesError(error){
        console.error(error);
    }
    handleGetGradesSuccess(grades){
        this.gradeTable.updateGrades(grades);
        var total = 0
        for(var i=0; i<grades.length; i++){
            total = total + (grades[i].grade);
        }
        header.append(total/grades.length);
    }
    getGrades(){
        $.ajax({
            method: "GET",
            url: "http://sgt.lfzprototypes.com/api/grades",
            headers: {'x-access-token': 'SDjPqUss'},
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        })
    }
    start(){
        this.getGrades();
    }
}