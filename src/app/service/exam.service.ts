import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) { }

  public exams(){
    return this.http.get(`${baseUrl}/exam`);
  }

  public addExams(exam: any){
    return this.http.post(`${baseUrl}/exam/add-exams`, exam);
  }

  public deleteExams(qid: any){
    return this.http.delete(`${baseUrl}/exam/${qid}`);
  }

  public getExam(qid: any){
    return this.http.get(`${baseUrl}/exam/${qid}`);
  }

  public updateExam(qid: any){
    return this.http.put(`${baseUrl}/exam/`, qid);
  }

  public getExamsOfCategory(cid: any){
    return this.http.get(`${baseUrl}/exam/category/${cid}`)
  }
}
