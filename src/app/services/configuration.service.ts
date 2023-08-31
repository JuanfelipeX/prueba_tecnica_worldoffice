import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private URL_BASE: string;
  private URL_WEB: string;
  constructor() {
    /* Configuración de url del servidor Api Rest */
    this.URL_BASE = 'https://wo-fifa.azurewebsites.net/';
    this.URL_WEB = 'https://wo-fifa.azurewebsites.net/';
  }

  /*-------------------------------------------------------------------------------
  | Función get url base. Retorna la url del servidor configurada en la variable  |
  --------------------------------------------------------------------------------*/
  getUrlBase() {
    return this.URL_BASE;
  }
  getUrlWeb() {
    return this.URL_WEB;
  }
}
