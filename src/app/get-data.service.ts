/**
 * Created by codev on 7/25/17.
 */
import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class getDataService {

  // variables for the main service
  selectedCity:any

  constructor(private http:Http,
             private router:Router) {}



  // getCities(value) {
  //   return this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyAnqpYuuFQVg0PRzasob4BdNWZ58rArRKg');
  // }



  // cities:any = [
  //   {title: 'Provo, Utah', id: 1},
  //   {title: 'South Jordan', id: 2},
  //   {title: 'Hebber' , id: 3},
  //   {title: 'Murray', id: 4},
  //   {title: 'West Jordan', id: 5},
  //   {title: 'Bothell', id: 6},
  //   {title: 'Brownsville', id: 7},
  //   {title: 'Bird', id: 8},
  //   {title: 'Martin Cove', id: 9},
  //   {title: 'Riverton', id: 10},
  //   {title: 'New York', id: 11},
  //   {title: 'Seattle', id: 12},
  //   {title: 'San Fransico', id: 13},
  //   {title: 'Colorado Springs', id: 14},
  // ]
  //
  // cityObj:any = {
  //   1: {md: 200000, sq: 200, al: 500000, score: 3, name: "Provo, Utah"}
  // }


  cities:any = [
    {title: 'Provo, Utah', id: 1},
    {title: 'Dallas', id: 2},
    {title: 'Fort Worth', id: 3},
    {title: 'Frisco', id: 455},
    {title: 'McKinney', id: 4},
    {title: 'Arlington', id: 5},
    {title: 'Little Elm', id: 6},
    {title: 'Plano', id: 7},
    {title: 'Irving', id: 8},
    {title: 'Flower Mound', id: 9},
    {title: 'Allen', id: 10},
    {title: 'Garland', id: 11},
    {title: 'Grand Prairie', id: 12},
    {title: 'Prosper', id: 13},
    {title: 'Denton', id: 14},
    {title: 'Rockwall', id: 15},
    {title: 'Colleyville', id: 16},
    {title: 'Southlake', id: 17},
    {title: 'Waxahachie', id: 18},
    {title: 'Mansfield', id: 19},
    {title: 'Cedar Hill', id: 20},
    {title: 'Mesquite', id: 21},
    {title: 'Rowlett', id: 22},
    {title: 'Midlothian', id: 23},
    {title: 'Keller', id: 24},
    {title: 'The Colony', id: 25},
    {title: 'Wylie', id: 26},
    {title: 'Carrollton', id: 27},
    {title: 'Lewisville', id: 28},
    {title: 'Terrell', id: 29},
    {title: 'Azle', id: 30},
    {title: 'DeSotoDeSoto', id: 31},
    {title: 'University Park', id: 32},
    {title: 'Richardson', id: 33},
    {title: 'Ennis', id: 34},
    {title: 'Burleson', id: 35},
    {title: 'Cleburne', id: 36},
    {title: 'Coppell', id: 37},
    {title: 'Weatherford', id: 38},
    {title: 'Forney', id: 39},
    {title: 'Greenville', id: 40},
    {title: 'North Richland Hills', id: 41},
    {title: 'Lancaster', id: 42},
    {title: 'Sachse', id: 43},
    {title: 'Euless', id: 44},
    {title: 'Grapevine', id: 45},
    {title: 'Duncanville', id: 46},
    {title: 'Corinth', id: 47},
    {title: 'Saginaw', id: 48},
    {title: 'Benbrook', id: 49},
    {title: 'Murphy', id: 50},
    {title: 'Bedford', id: 51},
    {title: 'Crowley', id: 52},
    {title: 'Haltom City', id: 53},
    {title: 'Hurst', id: 54},
    {title: 'Watauga', id: 55}

  ]

  cityObj:any = {
    1: {name: "Provo", score: 5.1, zmv: 159000, zmlp: 405000, mls: 205, al: 3916 },
    2: {name: "Dallas", score: 8.1, zmv: 163800, zmlp: 405000, mls: 205, al: 3916 },
    3:  { name: "Fort Worth", score: 5.1, zmv: "–", zmlp: 232000, mls: 109, al: 3122 },
    455:  { name: "Frisco", score: 9.1, zmv: 390600, zmlp: 500000, mls: 154, al: 1192 },
    4:   { name: "McKinney", score: 6.1, zmv: 293400, zmlp: 369995, mls: 138, al: 1123 },
    5:   { name: "Arlington", score: 1.3, zmv: 177300, zmlp: 199900, mls: 104, al: 694 },
    6:   { name: "Little Elm", score: 7.6, zmv: "–", zmlp: 319945, mls: 126, al: 638 },
    7:    { name: "Plano", score: 3.7, zmv: 325400, zmlp: 374950, mls: 142, al: 569 },
    8:    { name: "Irving", score: 6.7, zmv: 181300, zmlp: 369900, mls: 151, al: 473 },
    9:    { name: "Flower Mound", score: 4.1, zmv: "–", zmlp: 462492, mls: 151, al: 405 },
    10:     { name: "Allen", score: 7.7, zmv: 305300, zmlp: 403990, mls: 141, al: 404 },
    11:    { name: "Garland", score: 1.2, zmv: "–", zmlp: 198900, mls: 112, al: 381 },
    12:    { name: "Grand Prairie", score: 2.5, zmv: 176000, zmlp: 229200, mls: 98, al: 380 },
    13:    { name: "Prosper", score: 9.9, zmv: "–", zmlp: 510570, mls: 146, al: 377 },
    14:    { name: "Denton", score: 1.9, zmv: "–", zmlp: 279000, mls: 124, al: 338 },
    15:     { name: "Rockwall", score: 8.1, zmv: 260000, zmlp: 326250, mls: 122, al: 314 },
    16:    { name: "Colleyville", score: 9.1, zmv: "–", zmlp: 632990, mls: 170, al: 307 },
    17:   { name: "Southlake", score: 9.1, zmv: 661700, zmlp: 789000, mls: 192, al: 267 },
    18:   { name: "Waxahachie", score: 7.9, zmv: "–", zmlp: 240370, mls: 115, al: 265 },
    19:  { name: "Mansfield", score: 5.7, zmv: 252400, zmlp: 299999, mls: 111, al: 238 },
    20:  { name: "Cedar Hill", score: 5.1, zmv: "–", zmlp: 205500, mls: 96, al: 235 },
    21:  { name: "Mesquite", score: 2.3 , zmv: 155700, zmlp: 169900, mls: 98, al: 231},
    22:   { name: "Rowlett", score: 2.5, zmv: 233000, zmlp: 259900, mls: 115, al: 229 },
    23:  { name: "Midlothian", score: 7.2, zmv: 233900, zmlp: 324590, mls: 119, al: 216 },
    24:   { name: "Keller", score: 8.8, zmv: 382200, zmlp: 439045, mls: 142, al: 215 },
    25:   { name: "The Colony", score: 1.7, zmv: 223400, zmlp: 402990, mls: 148, al: 211 },
    26:  { name: "Wylie", score: 2.7, zmv: 241300, zmlp: 286560, mls: 120, al: 206 },
    27:  { name: "Carrollton", score: 1.1, zmv: 252300, zmlp: 290000, mls: 136, al: 201 },
    28:   { name: "Lewisville", score: 0.5, zmv: 235100, zmlp: 276900, mls: 134, al: 189 },
    29:   { name: "Terrell", score: 2.6, zmv: 128400, zmlp: 209945, mls: 104, al: 171 },
    30:  { name: "Azle", score: 7.4, zmv: 146700, zmlp: 239000, mls: 111, al: 163 },
    31:  { name: "DeSotoDeSoto", score: 4.6, zmv: 177300, zmlp: 199000, mls: 87, al: 160 },
    32: { name: "University Park", score: 9.8, zmv: 1419700, zmlp: 1600000, mls: 417, al: 155 },
    33:  { name: "Richardson", score: 1.3, zmv: 277400, zmlp: 335000, mls: 149, al: 152 },
    34:  { name: "Ennis", score: 5.1, zmv: 118000, zmlp: 165000, mls: 86, al: 152 },
    35:  { name: "Burleson", score: 4.6, zmv: 169500, zmlp: 229450, mls: 105, al: 148 },
    36:  { name: "Cleburne", score: 3.2, zmv: 117900, zmlp: 145, mls: 87, al: 144 },
    37:  { name: "Coppell", score: 7.3, zmv: 406900, zmlp: 484400, mls: 170, al: 143 },
    38:  { name: "Weatherford", score: 7.7, zmv: 163700, zmlp: 213000, mls: 109, al: 143 },
    39:  { name: "Forney", score: 3.5, zmv: "–", zmlp: 245000, mls: 108, al: 141 },
    40:   { name: "Greenville", score: 5.8, zmv: 89200, zmlp: 174500, mls: 96, al: 135 },
    41:   { name: "North Richland Hills", score: 2.3, zmv: 206200, zmlp: 289426, mls: 122, al: 134 },
    42:  { name: "Lancaster", score: 2.4, zmv: 148000, zmlp: 150000, mls: 84, al: 131 },
    43: { name: "Sachse", score: 5.8, zmv: 259500, zmlp: 349814, mls: 121, al: 120 },
    44: { name: "Euless", score: 3.1, zmv: 205900, zmlp: "–", mls: 138, al: 97 },
    45: { name: "Grapevine", score: 4.1, zmv: 330700, zmlp: 384950, mls: 158, al: 91 },
    46: { name: "Duncanville", score: 4.9, zmv: 155300, zmlp: 189700, mls: 98, al: 79 },
    47:  { name: "Corinth", score: 7.4, zmv: 247700, zmlp: 275000, mls: 114, al: 74 },
    48:  { name: "Saginaw", score: 8.1, zmv: 168900, zmlp: 241495, mls: 103, al: 74 },
    49:  { name: "Benbrook", score: 5.1, zmv: 184000, zmlp: 249900, mls: 120, al: 71 },
    50:  { name: "Murphy", score: 5.1, zmv: 369400, zmlp: 385000, mls: 124, al: 57 },
    51:  { name: "Bedford", score: 0.3, zmv: 227500, zmlp: 249000, mls: 127, al: 55 },
    52:  { name: "Crowley", score: 4.1, zmv: "–", zmlp: 199900, mls: 98, al: 51 },
    53:  { name: "Haltom City", score: 0.9, zmv: 125600, zmlp: "–", mls: 99, al: 48 },
    54:  { name: "Hurst", score: 1.1, zmv: "–", zmlp: 220000, mls: 115, al: 48 },
    55:  { name: "Watauga", score: 0.1, zmv: "–", zmlp: 155000, mls: 108, al: 21 }
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
      this.router.navigate(['home'])
      return  { name: "none", score: 0.1, zmv: "–", zmlp: 155000, mls: 108, al: 21 }
    }
  }

}




