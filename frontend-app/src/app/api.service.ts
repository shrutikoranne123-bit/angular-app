import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Use 'inject' instead of constructor injection (Standard for Angular 21)
  private readonly http = inject(HttpClient);
  
  // Replace with your actual EC2 Public IP or Domain
  private readonly apiUrl = 'http://your-ec2-ip:3000/api/data';

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}