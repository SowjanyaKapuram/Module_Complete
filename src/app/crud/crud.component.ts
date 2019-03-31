import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class Book{
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

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  url: string="../assets/booklist.json";
  books: Array<Book>=[];
bookId : number;
isUpdated : boolean=false;
book : Book;
  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
this.httpClient.get<Book[]>(this.url).subscribe( 
(response) =>{
  console.log(response);
  this.books = response;
},
  (error) =>{
    console.log("error")

     }
)

  }

  add(value:any){

this.books.push( new Book(value.id,value.title,value.year,value.author));

  }

  delete(id:number){
    this.books.splice(id,1);
  }

  update(id : number){

this.bookId = id;
this.isUpdated=true;
this.book = this.books[id];

  }
  updateBook(value:any){
value.id= this.books[this.bookId].id
    this.books.splice(this.bookId,1,value);
  }

}
