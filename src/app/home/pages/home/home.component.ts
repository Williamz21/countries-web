import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  selectFormControl = new FormControl('');
  countries:Array<any> = [];

  constructor(public router: Router,private newService: HomeService) {
  }

  ngOnInit(): void {
    this.getAllCountries()
  }

  seeRegion(){
    console.log(this.selectFormControl.value)
  }

  getAllCountries() {
    this.newService.getAllCountries().subscribe( (response: any) => {
      this.countries = response;
      console.log();
    })
  }

  getAllByRegion(){
    if(this.selectFormControl.value){
      this.newService.getAllByRegion(this.selectFormControl.value).subscribe( (response: any) => {
        this.countries = response;
        console.log();
      })
    }
    else{
      this.getAllCountries()
    }
  }
}
