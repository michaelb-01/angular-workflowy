import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Item } from '../../server/models/Item';

const api_url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    let items = this.http.get(api_url + '/items');

    return <Observable<Item[]>> items;
  }
}
