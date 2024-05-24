import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/wheater.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto-d',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './punto-d.component.html',
  styleUrl: './punto-d.component.css',
})
export class PuntoDComponent {
  city = '';
  weatherData: any;
  forecastData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
    });
  }
}
