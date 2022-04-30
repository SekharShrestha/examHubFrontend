import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-add-exams',
  templateUrl: './add-exams.component.html',
  styleUrls: ['./add-exams.component.css']
})
export class AddExamsComponent implements OnInit {

  constructor(private examService: ExamService, private categoryService: CategoryService, private snackbar: MatSnackBar) { }

  exams =
    {
      title: '',
      description: '',
      noOfQuestions: '',
      maxMarks: null,
      category:{
        cid: null
      }
    };

    category = [{
      cid: null,
      title: '',
      description: ''
    }];
  

  ngOnInit(): void {
    this.categoryService.categories().subscribe(
      (data: any)=>{
        this.category = data;
        // this.snackbar.open("Successfully added", "OK", {duration: 3000, verticalPosition: "top" });
      },
      (error: any)=>{
        this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
  
      }
    )
}

formSubmit(){
  console.log(this.exams);
  if(this.exams.title.trim()=='' || this.exams.title==null){
    this.snackbar.open("Field Marked as * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
    return;
  }

  this.examService.addExams(this.exams).subscribe(
    (data: any)=>{
      console.log(data);
      
      this.snackbar.open("Successfully added", "OK", {duration: 3000, verticalPosition: "top" });
      this.exams = {
      title: '',
      description: '',
      noOfQuestions: '',
      maxMarks: null,
      category:{
        cid: null
      }
    };
    },
    (error: any)=>{
      this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
      console.log(error);
    }
  )
}
}
