import { NgModule } from '@angular/core';
import { SbibliotecaComponent } from './sbiblioteca.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl}  from '@angular/forms';
import { SlibrosService } from './sbiblioteca.service';

@NgModule({
  imports: [ BrowserModule, FormsModule  ],
  declarations: [SbibliotecaComponent,],
  exports: [SbibliotecaComponent],
  providers: [NgModule,FormBuilder, SlibrosService ]

})
export class SbibliotecaModule { }