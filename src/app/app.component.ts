import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, PuntoAComponent, PuntoBComponent, PuntoCComponent, PuntoDComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-webservice-4947';
}
