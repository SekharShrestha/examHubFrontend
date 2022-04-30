import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/service/exam.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  qid: any;

  questions = 
    {
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      ans: '',
      exam: {
        qid: ''
      }
    };

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.questions.exam['qid'] = this.qid;
    
  }

  formSubmit(){
      console.log(this.questions);
      if(this.questions.content.trim()=='' || this.questions.content==null){
        this.snackbar.open("Field Marked as * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
        return;
      }
      if(this.questions.option1.trim()=='' || this.questions.option1==null){
        this.snackbar.open("Field Marked as * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
        return;
      }
      if(this.questions.option2.trim()=='' || this.questions.option2==null){
        this.snackbar.open("Field Marked as * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
        return;
      }
      if(this.questions.option3.trim()=='' || this.questions.option3==null){
        this.snackbar.open("Field Marked as * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
        return;
      }
      if(this.questions.option4.trim()=='' || this.questions.option4==null){
        this.snackbar.open("Field Marked as * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
        return;
      }
      if(this.questions.ans.trim()=='' || this.questions.ans==null){
        this.snackbar.open("Field Marked as * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
        return;
      }
    
      this.questionService.addQuestion(this.questions).subscribe(
        (data: any)=>{
          console.log(data);
          
          this.snackbar.open("Successfully added", "OK", {duration: 3000, verticalPosition: "top" });
          this.questions ={
            content: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            ans: '',
            exam: {
              qid: ''
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

