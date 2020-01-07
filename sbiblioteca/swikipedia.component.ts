import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SlibrosService } from './sbiblioteca.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-sbiblio',
  templateUrl: 'sbiblioteca.component.html',
  styleUrls: ['sbiblioteca.component.css'],
  providers: [SlibrosService]

})



export class SbibliotecaComponent  {
  
 visibility = 'shown';

getLabel() {
  return this.visibility == 'shown' ? 'Hide' : 'Show';
}

toggleVisibility() {
  this.visibility = 
  this.visibility == 'shown'
  ? 'hidden' :  'shown';
 }

  items: Observable<string[]>;

  // @HostBinding('@routeAnimation') routerAnimation = true;
  // @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute'; 

  constructor (private sbibliotecaService: SlibrosService) { }



  search (term: string) {
    this.items = this.sbibliotecaService.search(term);
  }

}