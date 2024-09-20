import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from '../api-google/services/google-books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private googleBooksService: GoogleBooksService) {}

  ngOnInit(): void {
    // Récupère l'ID du livre depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.googleBooksService.getBookById(id).subscribe((data) => {
        this.book = data;
      });
    }
  }
}
