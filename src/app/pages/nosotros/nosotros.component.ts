import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  equipo = [
    { nombre: "vrilli castro",rol: "desarrolladora frontend con 3 años de experiencia"}, 
    { nombre: "ely tobar",rol: "estudiante de desarrollo web actualmente cursando modulo frontend"},
    { nombre: "yelisa palacios mosquera",rol: "estudiante de desarrollo web"},
    { nombre: "Danny murillo",rol:"estudiante de desarrollo web"},
  ];

}
