import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketsListService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000/characters';
  getCharacters() {
    return this
            .http
            .get(`${this.url}`);
        }
}