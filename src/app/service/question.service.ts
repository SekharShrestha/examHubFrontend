import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public getQuestions(qid: any){
    return this.http.get(`${baseUrl}/question/exam/${qid}`);
  }

  public getQuestionsForExam(qid: any){
    return this.http.get(`${baseUrl}/question/exam/${qid}`);
  }

  public addQuestion(question: any){
    return this.http.post(`${baseUrl}/question/`, question);
  }

  public deleteQuestion(qid: any){
    return this.http.delete(`${baseUrl}/question/${qid}`);
  }

  public eval(questions: any){
    return this.http.post(`${baseUrl}/question/eval`, questions);
  }
}
