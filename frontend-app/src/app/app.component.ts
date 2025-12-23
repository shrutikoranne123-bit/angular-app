import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Backend Status: {{ status }}</h1>`
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient); // Modern 2025 injection
  status: string = 'Loading...';

  ngOnInit() {
    // In production, Nginx will proxy '/api' to your Node.js backend
    this.http.get<{message: string}>('/api/status').subscribe({
      next: (data) => this.status = data.message,
      error: (err) => this.status = 'Error connecting to backend'
    });
  }
}