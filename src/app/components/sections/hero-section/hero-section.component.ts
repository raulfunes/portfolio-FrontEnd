import { Component, Input, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Persona } from 'src/app/models/persona';
import { Usuario } from 'src/app/models/usuario';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  @Input() usuario: Usuario;
  @Input() usuLogged: boolean;
  @Input() persona: Persona;


  scroll(selector) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({ behavior: "smooth" }) : null;
  }
  
  ngOnInit(): void {

  }

}
