import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SlibrosService {

  constructor(private jsonp: Jsonp) {}
  
  search (term: string) {  
   // let queryString =  `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;
    let libros = 'http://localhost:3000/libros';
   let params = new URLSearchParams();
         params.set('nombre',  term); // the user's search value
         params.set('callback', 'JSONP_CALLBACK');
 
    // TODO: Add error handling
    return this.jsonp
               .get(libros, { search: params })
               .map(response => <string[]> response.json());
  }
}
