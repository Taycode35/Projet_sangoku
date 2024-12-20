import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://dragonball-api.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number) : Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&limit=6`);
  }

  getCharacterDetails(id: string) : Observable<any> {
    return this.http.get(`${this.apiUrl}?id=${id}`);
  }

}
