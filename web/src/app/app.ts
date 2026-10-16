import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface HealthResponse {
  status: string;
  application: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly http = inject(HttpClient);

  readonly connection = signal<'loading' | 'ok' | 'error'>('loading');
  readonly errorMessage = signal('');

  constructor() {
    this.http.get<HealthResponse>('/api/v1/health').subscribe({
      next: (response) => {
        if (response.status === 'ok' &&
            response.application === 'Orna Rentals') {
          this.connection.set('ok');
        } else {
          this.errorMessage.set('A backend váratlan választ adott.');
          this.connection.set('error');
        }
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          `Az API nem érhető el (HTTP ${error.status}). Ellenőrizd a Laravel szervert.`
        );
        this.connection.set('error');
      },
    });
  }
}