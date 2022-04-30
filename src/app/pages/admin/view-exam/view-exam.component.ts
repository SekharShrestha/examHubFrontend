import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/service/exam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.css']
})
export class ViewExamComponent implements OnInit {

  constructor(private exam: ExamService, private snackbar: MatSnackBar, private route: ActivatedRoute) { }

  exams = [
    {
      qid: null,
      title: '',
      description: '',
      noOfQuestions: '',
      maxMarks: '',
      category:{
        title: ''
      }
    }
  ]

  ngOnInit(): void {
    this.exam.exams().subscribe(
      (data: any)=>{
        this.exams = data;
        console.log(this.exams);
      },
      (error: any)=>{
        this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
        console.log(error);
      }
    )
  }

  // deleteExamt(qid: any){
  //   this.exam.deleteExams(qid).subscribe(
  //     (data: any)=>{
  //       this.exams = this.exams.filter((e)=>e.qid!=qid); //kind of refreshing after delete
  //       this.snackbar.open("Successfully Deleted", "OK", {duration: 3000, verticalPosition: "top" });
  //     },
  //     (error: any)=>{
  //       this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
  //       console.log(error);
  //     }
  //   );
  // }

  deleteExam(qid: any){
    
    Swal.fire({
      title: "Are you sure you want to delete",
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result: any)=>{

      if(result.isConfirmed){
        
        this.exam.deleteExams(qid).subscribe(
          (data: any)=>{
            this.exams = this.exams.filter((e)=>e.qid!=qid); //kind of refreshing after delete
            this.snackbar.open("Successfully Deleted", "OK", {duration: 3000, verticalPosition: "top" });
          },
          (error: any)=>{
            this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
            console.log(error);
          }
        );
      }
    })
  }

}
