import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:'',component: ContactFormComponent },
  {path:'studentDetails',component: ContactFormComponent },
  {path:'registerForm',component: RegisterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
