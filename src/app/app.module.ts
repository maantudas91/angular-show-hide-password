import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordShowHideDirective } from './password-show-hide.directive';
import { ShowHideComponent } from './show-hide.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, PasswordShowHideDirective, ShowHideComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
