import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../api-google/services/google-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  displayedBooks: any[] = [];
  
  constructor(private googleBooksService: GoogleBooksService, private router: Router) {} 

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

  goToDetails(bookId: string): void { 
    this.router.navigate(['/book', bookId]);
  }
}
