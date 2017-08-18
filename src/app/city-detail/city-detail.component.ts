import { Component, OnInit } from '@angular/core';
import {getDataService} from "../get-data.service";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css', '../app.component.css']
})
export class CityDetailComponent implements OnInit {

  // variables for the city details page
  selectedCity:any
  filterargs:any;
  cities:any;
  searchPredictions:any;
  buyOrSell:any;

  constructor(private getDataService: getDataService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.filterargs = { title: '' }
    this.cities = this.getDataService.getCities()
    this.selectedCity = this.getDataService.getSelectedCity()

    if (this.selectedCity.score > 5) {
      this.buyOrSell = 'Buyers'
    }
    else {
      this.buyOrSell = 'Sellers'
    }


  }

  onCityChange() {

    if (this.filterargs.title !== '' && this.filterargs.title !== null && this.filterargs.title !== undefined ) {
      this.searchPredictions = true
    }
    else {
      this.searchPredictions = false
    }
  }

  onSelectCity(city) {

    this.getDataService.saveCity(city)
    this.selectedCity = this.getDataService.getSelectedCity()

    if (this.selectedCity.score > 5) {
      this.buyOrSell = 'buy'
    }
    else {
      this.buyOrSell = 'sell'
    }

    this.searchPredictions = false
  }

}
