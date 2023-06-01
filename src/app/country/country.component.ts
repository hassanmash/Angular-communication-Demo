import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public country: string = "";
  public city: string = "";
  public countryList: string[] = [];
  public countryListObsrv: string[] = [];
  public cityList: string[] = [];
  public cityListObsrv: string[] = [];
  public styleExp: string = "none";
  public styleExpObsrv: string = "none";

  private countryAndCity: any = {
    "India": ["Assam", "Bihar", "Delhi", "Karnataka", "Kerala"],
    "New Zealand": ["Auckland","Queenstown","Hamilton","Greymouth"],
    "Australia": ["Melbourne","Sydney","Perth","Hobart"],
    "England": ["London","Liverpool","Manchester","Oxford"]
  }

  constructor(private svc: CountryService) { }

  ngOnInit(): void {
  }

  public getCountryList() {
    this.styleExp = "none";
    this.country = "";
    this.countryList = [];
    this.countryList.push("India");
    this.countryList.push("New Zealand");
    this.countryList.push("Australia");
    this.countryList.push("England");
  }
  public getCountryListObsrv() {
    this.countryListObsrv = [];
    this.svc.countryStream.subscribe({
      next: (data)=> this.countryListObsrv.push(data),
      error: () => console.log("Error occured"),
      complete: () => console.log("Fetch country complete")
    });
  }

  // Without Observables:
  public getCityList() {
    this.styleExp = "block";
    this.cityList = this.countryAndCity[this.country];
  }

  //With Observables:
  public getCityListObsrv() {
    this.styleExpObsrv = "block";
    this.svc.cityStream.subscribe({
      next: (data) => {
        if (data[0] == this.country){
          data.shift();
          this.cityListObsrv = data;
        }
      }
    });
  }
}
