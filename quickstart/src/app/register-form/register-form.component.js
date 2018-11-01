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
var forms_1 = require("@angular/forms");
var RegisterFormComponent = (function () {
    function RegisterFormComponent(fb) {
        this.fb = fb;
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.getRegisterForm();
    };
    RegisterFormComponent.prototype.getRegisterForm = function () {
        this.registerForm = this.fb.group({
            firstName: ['', [forms_1.Validators.pattern('[a-zA-Z ]*'), forms_1.Validators.maxLength(20), forms_1.Validators.required]],
            lastName: ['', [forms_1.Validators.pattern('[a-zA-Z ]*'), forms_1.Validators.maxLength(20), forms_1.Validators.required]],
            class: ['', [forms_1.Validators.pattern('[a-zA-Z0-9]*'), forms_1.Validators.required]],
            yearOfPassing: ['', [forms_1.Validators.max(2017), forms_1.Validators.required]],
            percentage: ['', [forms_1.Validators.pattern('[0-9]*'), forms_1.Validators.required]]
        });
    };
    RegisterFormComponent.prototype.onFormSubmit = function () {
        alert("Form succesfully submitted");
        this.registerForm.reset();
    };
    return RegisterFormComponent;
}());
RegisterFormComponent = __decorate([
    core_1.Component({
        selector: 'reg-contact-form',
        templateUrl: './register-form.component.html',
        styleUrls: ['./register-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], RegisterFormComponent);
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=register-form.component.js.map