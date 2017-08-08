/**
 * Created by codev on 7/25/17.
 */
import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class getDataService {

  constructor(private http:Http) {}

  // getCities(value) {
  //   return this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyAnqpYuuFQVg0PRzasob4BdNWZ58rArRKg');
  // }

  cities:any = [
    {title: 'Provo Utah'},
    {title: 'South Jordan'},
    {title: 'Hebber'},
    {title: 'Murray'},
    {title: 'West Jordan'},
    {title: 'Bothell'},
    {title: 'Brownsville'},
    {title: 'Bird'},
    {title: 'Martin Cove'},
    {title: 'Riverton'},
    {title: 'New York'},
    {title: 'Seattle'},
    {title: 'San Fransico'},
    {title: 'Colorado Springs'},
  ]

  getCities() {
    return this.cities
  }





}




