import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { SlibrosService } from './wikipedia.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-wiki',
  templateUrl: 'servicio.component.html',
  styleUrls: ['servicio.component.css'],
  providers: [SlibrosService]

})



// export class ServicioComponent  {

  export class ServicioComponent {

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



  constructor (private slibrosService: SlibrosService) { }



    search (term: string) {
    this.items = this.slibrosService.search(term);
  }

}