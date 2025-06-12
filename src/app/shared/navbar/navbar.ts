import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [RouterLink, RouterOutlet]
})
export class Navbar {
  protected title = 'abstract';
}
