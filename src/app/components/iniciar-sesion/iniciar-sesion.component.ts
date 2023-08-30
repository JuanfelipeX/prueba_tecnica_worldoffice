import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IniciarSesionService } from 'src/app/services/iniciar-sesion/iniciar-sesion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  formulario: any = {};

  constructor(
    private iniciarSesionService: IniciarSesionService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  iniciarSesion() {
    this.iniciarSesionService.iniciarSesion(this.formulario).subscribe({
      next: (data) => {
        console.log(this.formulario);
      },
      error: (err) => {
        console.log(this.formulario);
      },
    });
  }

}
