import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {getDataService} from "../get-data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  homeLogo:string
  places:any
  cities:any

  constructor(private getDataService: getDataService ) { }

  ngOnInit() {

    this.cities = ["Provo Utah", "South Jordan", "Salt Lake City"]
    // ############ image assets for the home page #################### //
    this.homeLogo = environment.asset + "/realcitylogo.png";
  }



  getPredictions(value): void {
    return null
  }



}



