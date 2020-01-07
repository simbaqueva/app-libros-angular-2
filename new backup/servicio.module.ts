import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { SwikipediaComponent } from './swikipedia/swikipedia.component';
import { SbibliotecaComponent } from './sbiblioteca/sbiblioteca.component';
import { SimagenesComponent } from './simagenes/simagenes.component';
import { SlibrosService } from './wikipedia.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ImagenComponent } from './imagen/imagen.component';
// import { TextoComponent } from './texto/texto.component';

// import { ValidacionesComponent } from './validaciones/validaciones.component';



import { ServicioComponent } from './servicio.component';
import { ServicioRoutingModule } from './servicio-routing.module';


@NgModule({
  imports: [ HttpModule, JsonpModule, BrowserModule, ServicioRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, CustomFormsModule],
   declarations: [SimagenesComponent, SbibliotecaComponent,SwikipediaComponent, ServicioComponent],
  exports: [SimagenesComponent, SbibliotecaComponent, SwikipediaComponent, ServicioComponent],
  providers: [NameListService,SlibrosService]
})
export class ServicioModule { }
