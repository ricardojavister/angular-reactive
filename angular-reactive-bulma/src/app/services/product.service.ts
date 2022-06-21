import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Record, RootObject } from '../model/record';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Record[] = [];
  private myProducts = new BehaviorSubject<Record[]>([]);
  myProducts$ = this.myProducts.asObservable();

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<RootObject> {
    let headers = new HttpHeaders();
    headers = headers.set('X-Master-Key', '$2b$10$ghNHmZWM5nvdrV5tDL6akuKN6JanJ9/iG9vAa4F1yJF8X/ccv3o9C');
    const url ='https://api.jsonbin.io/v3/b/62b1fb13449a1f382113d677'
    return this.httpClient.get<RootObject>(
      url, { headers: headers } 
    );
  }

  addProduct(product: Record) {
    this.productList.push(product);
    this.myProducts.next(this.productList);
  }
}
