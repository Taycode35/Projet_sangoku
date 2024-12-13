import { Component } from '@angular/core';
import {CharacterDetailComponent} from "../character-detail/character-detail.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CharacterDetailComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
