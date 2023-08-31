import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IniciarSesionService } from 'src/app/services/iniciar-sesion/iniciar-sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  formulario: any = {};
  verificadorBool: boolean = false;

  constructor(private router: Router, 
    private iniciarSesionService: IniciarSesionService,) {
  }

  ngOnInit(): void {
    this.verifyLooged();
   }

  cerrarSesion() {
    this.iniciarSesionService.cerrarSesion(this.formulario).subscribe({
      next: (data) => {
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  verifyLooged() {
    if (localStorage.getItem('contrasena')) {
      this.verificadorBool = true;
    } else {
      this.verificadorBool = false;
    }
  }
}
