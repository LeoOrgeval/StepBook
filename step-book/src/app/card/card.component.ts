import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../google-books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  displayedBooks: any[] = [];

  constructor(private googleBooksService: GoogleBooksService) {}

  ngOnInit(): void {
    this.googleBooksService.books$.subscribe(
      (books) => {
        this.displayedBooks = books;
      },
      (error) => {
        console.error('Erreur lors de la réception des livres', error);
      }
    );
  }
}
