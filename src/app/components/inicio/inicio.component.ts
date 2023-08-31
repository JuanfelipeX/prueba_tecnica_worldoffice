import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/services/equipos/equipos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  //lista de herramientas
  listaEquipos: any[] = [];

  // Verificar Logeo
  verificadorBool: boolean = false;

  // variable para almacenar la consulta de búsqueda
  query: string = '';

  constructor(
    private equiposService: EquiposService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEquipos();
    this.verifyLooged();
  }

  verifyLooged() {
    if (localStorage.getItem('contrasena')) {
      this.verificadorBool = true;
    } else {
      this.verificadorBool = false;
    }
  }

  /*
   ************************************************
   *              TRAER EQUIPOS                   *
   ************************************************
   */
  getEquipos() {
    this.equiposService.obtenerEquipo().subscribe({
      next: (data) => {
        if (this.query) {
          this.listaEquipos = data.filter((element: any) =>
            element.nombre.toLowerCase().includes(this.query.toLowerCase())
          );
        } else {
          this.listaEquipos = data.content;
        }
      },
      error: (err) => { },
    });
  }


  borrarEquipos(id: any) {
    this.equiposService.eliminarEquipoId(id).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => { },
    });
  }

  /*
  ************************************************
  *                    BUSQUEDA                  *
  ************************************************
  */
  onSearch(value: string) {
    if (value && value.length > 3) {
      this.query = value; // actualiza la variable de consulta
      this.getEquipos(); // filtra la lista de herramientas
    } else {
      this.query = '';
      this.getEquipos();
    }
  }
}
