import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://78.157.187.10:5002';

  constructor(private httpClient: HttpClient) {}

  getUserStancePlot(username: string): Observable<Blob> {
    console.log(`${this.apiURL}/api/ustance/${username}`);
    
    return this.httpClient.get(`${this.apiURL}/api/ustance/${username}`, { responseType: 'blob' });
  }
}
