import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
   @Input() usuario: Usuario;
}
