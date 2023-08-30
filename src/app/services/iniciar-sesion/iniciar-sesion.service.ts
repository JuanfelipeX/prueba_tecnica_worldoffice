import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root',
})
export class IniciarSesionService {
  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  iniciarSesion(data: any) {
    return this.http.post(this.URL_BASE + 'sesion', data);
  }

  cerrarSesion(data: any) {
    return this.http.post(this.URL_BASE + 'sesion', data);
  }
}
