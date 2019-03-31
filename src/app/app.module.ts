import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { CrudexComponent } from './crudex/crudex.component';
import { ModelService } from './model.service';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    CrudexComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    ModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
