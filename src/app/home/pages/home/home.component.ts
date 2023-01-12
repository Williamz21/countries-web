import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  selectFormControl = new FormControl('');
  countries:Array<any> = [];
  countryFiltered:Array<any> = [];
  filterBy:any;

  constructor(private newService: HomeService) {
  }

  ngOnInit(): void {
    this.getAllCountries()
  }

  getAllCountries() {
    this.newService.getAllCountries().subscribe( (response: any) => {
      this.countries = response;
      this.countryFiltered = [...response]
    })
  }

  getAllByRegion(){
    if(this.selectFormControl.value){
      this.newService.getAllByRegion(this.selectFormControl.value).subscribe( (response: any) => {
        this.countryFiltered = response;
      })
    }
    else{
      this.getAllCountries()
    }
  }

  filter() {
    if(this.selectFormControl.value!='') this.selectFormControl = new FormControl('');
    this.countryFiltered = [...this.countries.filter(user => user.name.includes(this.filterBy))];
  }
}
