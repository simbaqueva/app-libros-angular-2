import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WikipediaService } from './wikipedia.service';
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


})



// export class ServicioComponent  {

  export class ServicioComponent implements OnInit {

name = 'Angular'; 
link = 'http://localhost:3000/';
http: Http;
litems = <any>[];



constructor(http: Http) {
  this.http = http;
}




  ngOnInit() { }
  listItems(item:HTMLInputElement): void {

 var apiLink = this.link + item;
  
  this.http.get(apiLink)
 .map(res => res.json())
    .subscribe(
      litem => this.litems  = litem,
      err => this.logError(err),
      () => console.log()
    )
  };

logError(err:any) {
  console.error('There was an error: ' + err);

}



  // addHero(term: string) {
  // this.wikipediaService.search(term),
                       
          
     }

  

//  visibility = 'shown';

// getLabel() {
//   return this.visibility == 'shown' ? 'Hide' : 'Show';
// }

// toggleVisibility() {
//   this.visibility = 
//   this.visibility == 'shown'
//   ? 'hidden' :  'shown';
//  }

//   items: Observable<string[]>;

  // @HostBinding('@routeAnimation') routerAnimation = true;
  // @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute'; 

  // constructor (private wikipediaService: WikipediaService) { }




  // search (term: string) {
  //   this.items = this.wikipediaService.search(term);
  // }


