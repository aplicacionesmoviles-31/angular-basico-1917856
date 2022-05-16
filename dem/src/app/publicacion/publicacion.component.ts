import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  //BD
  publicaciones = [ {
    "usuario": "@punch",
    "imagen": "../assets/img/carne.jpg",
    "caption": "Asando carne",
    "comentario": "", 
    "id": "1"
  },
  {
    "usuario": "@GDL",
    "imagen": "../assets/img/guadalajara.jpg",
    "caption": "En Guadalara...",
    "comentario": "", 
    "id": "2"
  },
  {
    "usuario": "@Foxtrot",
    "imagen": "../assets/img/keanu.jpg",
    "caption": "KEANUU!!!",
    "comentario": "", 
    "id": "3"
  }
  ];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }

}