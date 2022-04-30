import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { clear } from 'console';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',

  styleUrls: ['./start-exam.component.css']

})

export class StartExamComponent implements OnInit {
  qid: any;
  questions: any;

  marksGot = 0;
  correct = 0;
  attempted = 0;

  isSubmit = false;

  timer: any

  constructor(private locationSt: LocationStrategy, private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.preventExamBack();
    this.qid = this.route.snapshot.params['qid'];
    this.loadQuestions();
  }


  public loadQuestions() {
    this.questionService.getQuestions(this.qid).subscribe(
      (data: any)=>{
        this.questions = data;
        this.timer = (this.questions.length/5)*60;
        
        //console.log(data);
        this.time();
      },
      (error: any)=>{
        console.log(error);
        Swal.fire("Error");
      }
    )
  }

  public preventExamBack(){
    history.pushState(null, location.href);
    this.locationSt.onPopState(
      ()=>{
        history.pushState(null, location.href);
      }
    )
  }

  public submitExam(){
    Swal.fire({
      title: 'Are you sure you want to submit the exam ?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Don't Start`,
    }).then((e) => {
      if(e.isConfirmed){
        this.eval();    
      }
    })
  }

  public time(){
    let t = window.setInterval(()=>{
      if(this.timer <= 0){
        this.eval();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    }, 1000)
  }

  public getFormattedTime(){
    let min = Math.floor(this.timer/60);
    let sec = this.timer-min*60;
    return `${min}:${sec}`;
  }

  public eval(){
    this.isSubmit = true;
    this.questionService.eval(this.questions).subscribe(
      (data: any)=>{
        console.log(data);  
        this.marksGot = data.marksGot;
        this.attempted = data.attempted;
        this.correct = data.correct;      
      },
      (error: any)=>{
        console.log(error);
        
      }
    );

        
  }


  public printPage(){
    window.print();
  }

      

}
