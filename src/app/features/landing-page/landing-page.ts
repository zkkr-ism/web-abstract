import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer-component';

@Component({
  selector: 'landing-page',
  imports: [Navbar,FooterComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
}
