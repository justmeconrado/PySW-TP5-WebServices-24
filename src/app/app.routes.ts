import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';
export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'punto-a', component: PuntoAComponent },
  { path: 'punto-c', component: PuntoCComponent },
  { path: 'punto-b', component: PuntoBComponent },
  { path: 'punto-d', component: PuntoDComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home' },
];
