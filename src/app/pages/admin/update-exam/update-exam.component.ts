import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ExamService } from 'src/app/service/exam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  constructor(private route: ActivatedRoute, private examService: ExamService, private categoryService: CategoryService) { }

  qid: any = 0;

  exams: any;

  category = [{
    cid: null,
    title: '',
    description: ''
  }];

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.examService.getExam(this.qid).subscribe(
      (data: any)=>{
        this.exams = data;
        console.log(this.exams);        
      },
      (error: any)=>{
        console.log(error);        
      }
    );

    this.categoryService.categories().subscribe(
      (data: any)=>{
        this.category = data;
      },
      (error: any)=>{
        console.log(error);
        
      }
    );
  }

  public updateData(){
    this.examService.updateExam(this.exams).subscribe(
      (data: any)=>{
        Swal.fire("Successfully Updated");
      },
      (error: any)=>{
        Swal.fire("Error in updating");
        console.log(error);
        
      }
    )
  }

}
