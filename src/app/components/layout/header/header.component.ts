import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger("openClose",
      [
        state("close", style({
          transform: "translateX(100%)"
        })),
        state("open", style({
          transform: "translateX(0%)"
        })),
        transition("open <=> close", [
          animate("300ms")
        ])
      ]
    )
  ]
})
export class HeaderComponent {
  isOpen: boolean = false;

  @Input() usuLogged: boolean;

  @Output() logoutAll = new EventEmitter<boolean>()

  constructor() {
  }

  logout() {
    this.logoutAll.emit(true);
  }

  toogleNavbar() {
    this.isOpen = !this.isOpen;
  }

  onResize(event) {
    console.log();
    if (event.target.innerWidth > 740) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  scroll(selector) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({ behavior: "smooth" }) : null;
  }
}

