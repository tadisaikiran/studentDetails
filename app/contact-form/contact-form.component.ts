import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name = 'Angular';
  studentDetails: any = [];
  studentMarksDetails: any = [];
  constructor(private _http: Http) { }

  ngOnInit() {
    this.getStudentInfo();
  }

  getStudentInfo() {
    this.getStudentsDetails()
      .subscribe(res => {
        this.getTotalMarks(res);
      });
  }

  getTotalMarks(details: any) {
    let maxMarks: any = [];
    details.forEach((student: any) => {
      var totalMarks = parseInt(student.marks.English) + parseInt(student.marks.Maths) + parseInt(student.marks.Science);
      if (parseInt(student.marks.English) < 20 || parseInt(student.marks.Maths) < 20 || parseInt(student.marks.Science) < 20) {
        student.status = 'Fail';
      }
      else {
        student.status = 'Pass';
      }
      student.totalMarks = totalMarks;
      maxMarks.push(totalMarks);
      this.studentDetails.push(student);
    });
    var maxMark = Math.max(...maxMarks);
    this.studentDetails.find((x: any) => x.totalMarks == maxMark).status = 'Topper';
    this.studentMarksDetails = this.studentDetails.sort(this.sortOn('name'));
  }

  getStudentsDetails(): Observable<any> {
    let url = './app/studentInfo.json';
    return this._http.get(url)
      .map((response: Response) => response.json());
    // .do(data => console.log(JSON.stringify(data)));
  }

sortOn(property:any){
  return function(a:any, b:any){
    if( a[property] <b[property]){
      return -1;
    } else if( a[property] <b[property]){
      return 1;
    } else {
      return 0;
    }
  }
}

}