import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {getDataService} from "../get-data.service";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {isUndefined} from "util";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  homeLogo:string
  places:any
  cities:any

  // variables for the home page
  filterargs:any;
  searchPredictions:boolean = false;


  constructor(private getDataService: getDataService ) { }

  ngOnInit() {

    this.filterargs = {
      title: ''
    }

    this.cities = this.getDataService.getCities()

    // ############ image assets for the home page #################### //
    this.homeLogo = environment.asset + "/realcitylogo.png";

  }


  onCityChange() {

    if (this.filterargs.title !== '' && this.filterargs.title !== null && this.filterargs.title !== undefined ) {
      this.searchPredictions = true
    }
    else {
      this.searchPredictions = false
    }
  }


}



