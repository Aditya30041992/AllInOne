import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { Orderbook } from 'src/app/models/Orderbook';
import { Rates } from './models/rates';
import { Latestprices } from './models/latestprices';
@Injectable({
  providedIn: 'root'
})
export class ApitestService {
  languages: string = "http://localhost:5555/languages";
  student: string = "http://localhost:5555/student";
  orderBook: string = "http://localhost:5555/orderbook";
  rates: string = "http://localhost:5555/rates";
  latestprices: string = "http://localhost:5555/latestprices";

  constructor(private httpClient: HttpClient) { }
  getLanguages(): Observable<any> {
    return this.httpClient.get(this.languages);
  }
  getStudent(): Observable<Student>{
    return this.httpClient.get<Student>(this.student);
  }
  getOrderbook(): Observable<Orderbook>{
    return this.httpClient.get<Orderbook>(this.orderBook);
  }
  getRates(): Observable<Rates>{
    return this.httpClient.get<Rates>(this.rates);
  }
  getLatestprices(): Observable<Latestprices>{
    return this.httpClient.get<Latestprices>(this.latestprices);
  }
}
