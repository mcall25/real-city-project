import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {getDataService} from "../get-data.service";

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  homeLogo:string
  places:any
  autocomplete:any
  defaultBounds:any
  options:any



  constructor(private getDataService: getDataService ) { }

  ngOnInit() {

    // this.defaultBounds = new google.maps.LatLngBounds(
    //   new google.maps.LatLng(-33.8902, 151.1759),
    //   new google.maps.LatLng(-33.8474, 151.2631));

    this.options = {
      bounds: this.defaultBounds,
      types: ['establishment']
    };

    // ############ image assets for the home page #################### //
    this.homeLogo = environment.asset + "/realcitylogo.png";
  }



  getPredictions(value): void {
    return null
  }

  // getPredictions(value): void {
  //   this.autocomplete = new google.maps.places.Autocomplete(value, this.options);
  // }


}




// <div *ngFor="let hero of heroes | async"
// (click)="gotoDetail(hero)" class="search-result" >
//   {{hero.name}}
// </div>


// private searchTerms = new Subject<string>();

// Push a search term into the observable stream.
// search(term: string): void {
//   this.searchTerms.next(term);
// }

// getPredictions(value: string): void {
//   this.searchTerms.next(value);
// }


// what happens next
// ngOnInit(): void {
//   this.heroes = this.searchTerms
//   .debounceTime(300)        // wait 300ms after each keystroke before considering the term
//   .distinctUntilChanged()   // ignore if next search term is same as previous
//   .switchMap(term => term   // switch to new observable each time the term changes
//     // return the http search observable
//     ? this.heroSearchService.search(term)
//     // or the observable of empty heroes if there was no search term
//     : Observable.of<Hero[]>([]))
//   .catch(error => {
//
//     console.log(error);
//     return Observable.of<Hero[]>([]);
//   });
// }



// import 'rxjs/add/operator/toPromise';

// getHeroes(): Promise<Hero[]> {
//   return this.http.get(this.heroesUrl)
//     .toPromise()
//     .then(response => response.json().data as Hero[])
//     .catch(this.handleError);
// }

// getHeroes(): void {
//   this.heroService
//   .getHeroes()
//   .then(heroes => this.heroes = heroes);
// }
