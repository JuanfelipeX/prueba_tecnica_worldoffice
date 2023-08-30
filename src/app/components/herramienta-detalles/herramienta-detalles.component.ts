import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos/equipos.service';

@Component({
  selector: 'app-herramienta-detalles',
  templateUrl: './herramienta-detalles.component.html',
  styleUrls: ['./herramienta-detalles.component.css'],
})
export class HerramientaDetallesComponent implements OnInit {
  // Formulario de datos obtenidos
  formulario: any = {};

  /************ Rutas para obtener el Id ************/
  public loc = window.location;
  public pathName = this.loc.pathname.substring(
    22,
    this.loc.pathname.lastIndexOf('/') + 50
  );

  post_id: any = this.pathName;

  constructor(
    private equiposService: EquiposService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  /*
   ************************************************
   *              TRAER HERRAMIENTAS              *
   ************************************************
   */
   getEquipos() {
    this.equiposService.obtenerEquipoId(this.post_id).subscribe({
      next: (data) => {
        this.formulario = data;
      },
      error: (err) => {},
    });
  }
}
