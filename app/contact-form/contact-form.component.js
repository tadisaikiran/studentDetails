"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var ContactFormComponent = (function () {
    function ContactFormComponent(_http) {
        this._http = _http;
        this.name = 'Angular';
        this.studentDetails = [];
        this.studentMarksDetails = [];
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.getStudentInfo();
    };
    ContactFormComponent.prototype.getStudentInfo = function () {
        var _this = this;
        this.getStudentsDetails()
            .subscribe(function (res) {
            _this.getTotalMarks(res);
        });
    };
    ContactFormComponent.prototype.getTotalMarks = function (details) {
        var _this = this;
        var maxMarks = [];
        details.forEach(function (student) {
            var totalMarks = parseInt(student.marks.English) + parseInt(student.marks.Maths) + parseInt(student.marks.Science);
            if (parseInt(student.marks.English) < 20 || parseInt(student.marks.Maths) < 20 || parseInt(student.marks.Science) < 20) {
                student.status = 'Fail';
            }
            else {
                student.status = 'Pass';
            }
            student.totalMarks = totalMarks;
            maxMarks.push(totalMarks);
            _this.studentDetails.push(student);
        });
        var maxMark = Math.max.apply(Math, maxMarks);
        this.studentDetails.find(function (x) { return x.totalMarks == maxMark; }).status = 'Topper';
        this.studentMarksDetails = this.studentDetails.sort(this.sortOn('name'));
    };
    ContactFormComponent.prototype.getStudentsDetails = function () {
        var url = './app/studentInfo.json';
        return this._http.get(url)
            .map(function (response) { return response.json(); });
        // .do(data => console.log(JSON.stringify(data)));
    };
    ContactFormComponent.prototype.sortOn = function (property) {
        return function (a, b) {
            if (a[property] < b[property]) {
                return -1;
            }
            else if (a[property] < b[property]) {
                return 1;
            }
            else {
                return 0;
            }
        };
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    core_1.Component({
        selector: 'app-contact-form',
        templateUrl: './contact-form.component.html',
        styleUrls: ['./contact-form.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map