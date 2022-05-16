import { Component, OnInit } from '@angular/core';
import * as data from '../datos.json'; 

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html', 
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  siguiendo = false;

  editandoMensaje= false;
  editandoCorreo = false;

  usuario = {
    "nombre":"Luis",
    "alias": "@zellendust",
    "fotoPerfil": "../assets/img/luis.jpg",
    "seguidores": 334,
    "seguidos": 155,
    "bio": "feliz pero no mucho", 
    "publicacioness": [
      "../assets/img/publi1.jpeg",
      "../assets/img/publi2.jpg",
      "../assets/img/publi2.jpg"
    ]
  }

  seguir(): void {
    this.siguiendo = !this.siguiendo;
  }

  enviarMensaje(): void {

  }

  enviarEmail(): void {

  }

  desplegarOpciones(): void {
    //En proceso
  }

}