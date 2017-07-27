/**
 * Created by codev on 7/25/17.
 */
import {Injectable} from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class getDataService {

  constructor(private http: Http) {}

  getCities(value) {
    return this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyAnqpYuuFQVg0PRzasob4BdNWZ58rArRKg');
  }

}




