import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'reg-contact-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.getRegisterForm();
  }

  getRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(20), Validators.required]],
      lastName: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(20), Validators.required]],
      class: ['', [Validators.pattern('[a-zA-Z0-9]*'), Validators.required]],
      yearOfPassing: ['', [Validators.max(2017), Validators.required]],
      percentage: ['', [Validators.pattern('[0-9]*'), Validators.required]]
    });
  }
  onFormSubmit() {
   alert("Form succesfully submitted");
   this.registerForm.reset(); 
  }

}