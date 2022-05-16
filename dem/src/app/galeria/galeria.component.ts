import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  usuario = {
    "nombre":"Luis",
    "alias": "@zellendust",
    "fotoPerfil": "../assets/img/luis.jpg",
    "seguidores": 334,
    "seguidos": 155,
    "bio": "feliz pero no mucho", 
    "publicaciones" : [ {
      "usuario": "@punchdogs",
      "imagen": "../assets/img/carne.jpg",
      "caption": "Asando carne",
      "comentario": "", 
      "id": "1"
    },
    {
      "usuario": "@punchdogs",
      "imagen": "../assets/img/guadalajara.jpg",
      "caption": "Guadalajara!!",
      "comentario": "", 
      "id": "2"
    },
    {
      "usuario": "@punchdogs",
      "imagen": "../assets/img/keanu.jpg",
      "caption": "Encontre a Keanuu",
      "comentario": "", 
      "id": "3"
    }
    ]
  }

}