import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyDHKWcQUF9lgWQbD-F7rsp8rXpqvyMDNuQ';
  private booksSubject = new BehaviorSubject<any[]>([]); 
  public books$ = this.booksSubject.asObservable(); 

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}&key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        const books = data.items || [];
        this.booksSubject.next(books); 
        return books;
      })
    );
  }
}
