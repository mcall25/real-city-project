/**
 * Created by codev on 7/25/17.
 */
import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class getDataService {

  // variables for the main service
  selectedCity:any

  constructor(private http:Http) {}

  // getCities(value) {
  //   return this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyAnqpYuuFQVg0PRzasob4BdNWZ58rArRKg');
  // }



  cities:any = [
    {title: 'Provo, Utah', id: 1},
    {title: 'South Jordan', id: 2},
    {title: 'Hebber' , id: 3},
    {title: 'Murray', id: 4},
    {title: 'West Jordan', id: 5},
    {title: 'Bothell', id: 6},
    {title: 'Brownsville', id: 7},
    {title: 'Bird', id: 8},
    {title: 'Martin Cove', id: 9},
    {title: 'Riverton', id: 10},
    {title: 'New York', id: 11},
    {title: 'Seattle', id: 12},
    {title: 'San Fransico', id: 13},
    {title: 'Colorado Springs', id: 14},
  ]

  cityObj:any = {
    1: {md: 200000, sq: 200, al: 500000, score: 3, name: "Provo, Utah"}
  }

  getCities() {
    return this.cities
  }

  saveCity(city) {
    this.selectedCity = city
  }

  getSelectedCity() {

    if (this.selectedCity) {
      return this.cityObj[this.selectedCity.id]
    }
    else {
      return null
    }
  }







}




