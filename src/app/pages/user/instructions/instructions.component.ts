import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/service/exam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  qid: any;
  exam: any;

  constructor(private route: ActivatedRoute, private examService: ExamService, private router: Router) { }

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.examService.getExam(this.qid).subscribe(
      (data: any)=>{
        console.log(data);
        this.exam = data;
      },
      (error: any)=>{
        console.log(error);
        alert(Error);
      }
    )
  }

  public startExam(){
    Swal.fire({
      title: 'Are you ready to start the Exam ?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't Start`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/start/'+this.qid])
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

}
