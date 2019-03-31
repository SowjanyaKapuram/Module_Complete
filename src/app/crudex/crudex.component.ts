import { Component, OnInit } from '@angular/core';
import { Book, ModelService } from '../model.service';
 
@Component({
  selector: 'app-crudex',
  templateUrl: './crudex.component.html',
  styleUrls: ['./crudex.component.css']
})
export class CrudexComponent implements OnInit {

   

    // url: string="../assets/booklist.json";
    books: Array<Book>=[];
  bookId : number;
  isUpdated : boolean=false;
  book : Book;
  resp:any;
    constructor(private service:ModelService) { }
  
    ngOnInit() {
      //  this.resp= this.service.call();
      // this.service.toPrint("got console");
  this.service.call().subscribe(
    (response)=> {
      console.log(response);
      this.books= response;
      this.books.sort(function (obj1, obj2) {
        // Ascending: first age less than the previous
        return obj1.id - obj2.id;
      }

      )},
    (error)=>{
      console.log("error");
    }
  )
  
    }

    sor(i: any) {
      console.log(i)
      switch (i) {
        case 1:
          this.books.sort(function (obj1, obj2) {
            // Ascending: first age less than the previous
            return obj1.id - obj2.id;
          });
          break;
        case 2:
          this.books.sort(function (a, b) {
            var nameA = a.title.toUpperCase(); // ignore upper and lowercase
            var nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
          break;
        case 3:
          this.books.sort(function (obj1, obj2) {
            // Ascending: first age less than the previous
            return obj1.year - obj2.year;
          });
          break;
        case 4:
          this.books.sort(function (a, b) {
            var nameA = a.author.toUpperCase(); // ignore upper and lowercase
            var nameB = b.author.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
          break;
  
      }
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
  