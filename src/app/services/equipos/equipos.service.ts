import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  crearHerramienta(data: any) {
    return this.http.post(this.URL_BASE + 'equipos/crear', data);
  }

  obtenerHerramientas() {
    return this.http.get<any>(this.URL_BASE + 'equipos/listar/0/100');
  }

  obtenerHerramientaId(id: any) {
    return this.http.get<any>(this.URL_BASE + 'equipos/consultar' + '/' + id);
  }

  editarHerramienta(data: any, id: number) {
    return this.http.put(this.URL_BASE + 'equipos/actualizar' + '/' + id, data);
  }

  eliminarHerramienta(id: number) {
    return this.http.delete(this.URL_BASE + 'equipos/eliminar' + '/' + id);
  }
}
