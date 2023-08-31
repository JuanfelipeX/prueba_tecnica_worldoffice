import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos/equipos.service';
import { IniciarSesionService } from 'src/app/services/iniciar-sesion/iniciar-sesion.service';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css'],
})
export class HerramientaComponent implements OnInit {
  formulario: any = {};

  constructor(
    private equipoService: EquiposService,
    private router: Router
  ) {
    this.verifyLooged();
  }

  ngOnInit(): void {}

  /*
   ************************************************
   *              REGISTRAR EQUIPO                *
   ************************************************
   */
  registrarEquipo() {
    this.equipoService.crearEquipo(this.formulario).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  verifyLooged() {
    if (localStorage.getItem('contrasena')) {
    } else {
      this.router.navigateByUrl('iniciar-sesion');
    }
  }
}
