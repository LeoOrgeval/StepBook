import { Component } from '@angular/core';
import { GoogleBooksService } from '../google-books.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private googleBooksService: GoogleBooksService) {}

  onSearch(query: string) {
    if (query) {
      this.googleBooksService.searchBooks(query).subscribe(
        (books) => {
        },
        (error) => {
          console.error('Erreur lors de la recherche des livres', error);
        }
      );
    }
  }
}
