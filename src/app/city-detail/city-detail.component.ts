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

  constructor(private getDataService: getDataService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.selectedCity = this.getDataService.getSelectedCity()
    console.log( this.selectedCity )

  }

}
