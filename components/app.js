class App {
    constructor(gradeTable, pageHeader, gradeForm){
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.pageHeader = pageHeader;
        this.gradeTable = gradeTable;
        this.gradeForm = gradeForm;
        this.createGrade = this.createGrade.bind(this);
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
        var average = Math.round(total/grades.length)
        header.append(average);
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
        this.gradeForm.onSubmit(this.createGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
    }
    createGrade(name, course, grade){
        $.ajax({
            method: "POST",
            url: "http://sgt.lfzprototypes.com/api/grades",
            data: {
                "name": name,
                "course": course,
                "grade": grade
            },
            headers: {'x-access-token': 'SDjPqUss'},
            success: this.handleCreateGradeSuccess,
            fail: this.handleCreateGradeError
        })

    }
    handleCreateGradeError(){
        console.error(error);
    }
    handleCreateGradeSuccess(){
        this.getGrades;
    }
    deleteGrade(id){
        console.log(id);
    }
    handleDeleteGradeError(error){
        console.error(error);
    }
    handleDeleteGradeSuccess(){
        this.getGrades;
    }
}