import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private snackbar: MatSnackBar) { }

  qid: any;
  title: any;
  questions = [
    {
      qid: '',
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      ans: ''
    }
  ];

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.title = this.route.snapshot.params['title'];
    console.log(this.qid);
    console.log(this.title);
    this.questionService.getQuestions(this.qid).subscribe(
      (data: any)=>{
        this.questions = data;
        console.log(data);
      },
      (error: any)=>{
        this.snackbar.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
        console.log(error);
        
      }
    )
    
  }

  deleteQuestion(qid: any){
    
    Swal.fire({
      title: "Are you sure you want to delete",
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result: any)=>{

      if(result.isConfirmed){
        
        this.questionService.deleteQuestion(qid).subscribe(
          (data: any)=>{
            this.questions = this.questions.filter((e)=>e.qid!=qid); //kind of refreshing after delete
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
