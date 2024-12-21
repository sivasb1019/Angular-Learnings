import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  getMethod<T>(url?: string): Observable<T> {
    return this.httpClient.get<T>(`${url}`)
  }

  postMethod<T>(url?: string, data?: any): Observable<T> {
    return this.httpClient.post<T>(`${url}`, data)
  }

  deleteMethod<T>(url?: string): Observable<T> {
    return this.httpClient.delete<T>(`${url}`)
  }
}
