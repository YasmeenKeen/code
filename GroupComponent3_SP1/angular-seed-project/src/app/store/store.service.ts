import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import  'rxjs/add/operator/map';
@Injectable()
export class StoreService {

  constructor(private h: Http) { }

  getProducts() {
    return this.h.get("http://localhost:3000/api/product/getProducts")
    .map(Response => Response.json().data);
  }
}

