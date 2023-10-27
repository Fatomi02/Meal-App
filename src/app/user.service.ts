import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
        
  }
  getData(): Observable<any> {
      let api = "https://www.themealdb.com/api/json/v1/1/categories.php";
      return this.http.get(api)
  }
  
}
