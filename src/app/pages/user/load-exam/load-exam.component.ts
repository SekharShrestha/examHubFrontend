import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/service/exam.service';

@Component({
  selector: 'app-load-exam',
  templateUrl: './load-exam.component.html',
  styleUrls: ['./load-exam.component.css']
})
export class LoadExamComponent implements OnInit {

  cid: any;
  exams: any;
  constructor(private route: ActivatedRoute, private examService: ExamService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any)=> {
        this.cid = params.cid;
        if(this.cid == 0 || this.cid == null){
          console.log("Load all exams");
          
          this.examService.exams().subscribe(
            (data: any)=>{
              this.exams=data;
              console.log(this.exams);          
            },
            (error: any)=>{
              console.log(error);
              this.snack.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
            }
          );
        }
        else{
          console.log(('Load specific'));
          this.examService.getExamsOfCategory(this.cid).subscribe(
            (data: any)=>{
              this.exams=data;
              console.log(data);
            },
            (error: any)=>{
              alert(error);
            }
          )
          
        }
      }
    );

    
    

  }

}
