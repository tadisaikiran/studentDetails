import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,HttpModule ,AppRoutingModule, ReactiveFormsModule],
  declarations: [ AppComponent ,ContactFormComponent,RegisterFormComponent],
  providers: [],
  exports:[AppRoutingModule],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
