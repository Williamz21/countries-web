import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
  country: any;
  borderCountry: Array<any> =[];

  constructor(private newService: CountryService, public router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(){
    this.newService.getByName(this.route.snapshot.paramMap.get('name')).subscribe( (response: any) => {
      this.country = response;
    })
  }

  send(name:any){
    this.newService.getByName(name).subscribe( (response: any) => {
      this.country = response;
    })
  }
}
