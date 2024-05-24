import { Component} from '@angular/core';
import { NewService } from '../../services/new.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto-b',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-b.component.html',
  styleUrl: './punto-b.component.css',
})
export class PuntoBComponent {
  noticias: any[] = [];
  noticiaSeleccionada: any;

  constructor(private newsService: NewService) {}

  obtenerNoticias() {
    this.newsService.getNews().subscribe({
      next: (data: any) => {
        this.noticias = data.homepageArticles[0].articles;
      },
      error: (error: any) => {
        console.error('Error fetching news:', error);
      },
    });
  }

  mostrarDetallesNoticia(noticia: any) {
    this.noticiaSeleccionada = noticia;
    this.newsService.getNewsById(noticia.id).subscribe({
      next: (data: any) => {
        this.noticiaSeleccionada = data.article.seo;
      },
      error: (error: any) => {
        console.error('Error fetching news details:', error);
      },
    });
  }
}
