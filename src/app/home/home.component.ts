import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {getDataService} from "../get-data.service";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {



  // variables for the home page
  homeLogo:string
  places:any
  cities:any
  filterargs:any;
  searchPredictions:boolean = false;


  constructor(private getDataService: getDataService,
              private router:Router,
              private route:ActivatedRoute,) { }

  ngOnInit() {

    this.filterargs = { title: '' }

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

  onSelectCity(city) {

    this.router.navigate(['city-details'])
    this.getDataService.saveCity(city)

  }


}



