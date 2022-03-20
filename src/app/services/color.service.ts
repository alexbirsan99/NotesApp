import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColor } from '../objects/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http:HttpClient) { 

  }

  getColors():Observable<IColor[]> {
    const url = 'http://127.0.0.1:8000/api/colors/';
    return this.http.get<IColor[]>(url);
  }
}
