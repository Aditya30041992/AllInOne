import { Component, OnInit } from '@angular/core';
import { ApitestService } from './apitest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'json-server';

  constructor(private apitest:ApitestService){}

  ngOnInit(){
    this.getLanguages();
    this.getStudent();
    this.getOrderbook();
    this.getRates();
    this.getLatestprices();
  }

  getLanguages(){
    this.apitest.getLanguages().subscribe(function(data){
      console.log("Languages",data);
    })
  }

  getStudent(){
    this.apitest.getStudent().subscribe(function(data){
      console.log("Student",data);
    })
  }
  getOrderbook(){
    this.apitest.getOrderbook().subscribe(function(data){
      console.log("Orderbook",data);
    })
  }

  getLatestprices(){
    this.apitest.getLatestprices().subscribe(function(data){
      console.log("LatesPrices",data);
    })
  }

  getRates(){
    this.apitest.getRates().subscribe(function(data){
      console.log("Rates",data);
    })
  }

}
