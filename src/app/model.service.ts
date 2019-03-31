import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Book{
  id:number;
  title: string;
  year: number;
  author: string;
  constructor(id:number, title: string,year: number,author: string){
    this.id=id;
    this.title= title;
    this.year=year;
    this.author=author;
  }
}


@Injectable({
  providedIn: 'root'
})
export class ModelService{

  url: string="../assets/booklist.json";
  booksarray: Array<Book>=[];
// bookId : number;
// isUpdated : boolean=false;
// book : Book;
  constructor(private httpClient : HttpClient) { }

  call() {
return this.httpClient.get<Book[]>(this.url) 
}  
     

  }

  

