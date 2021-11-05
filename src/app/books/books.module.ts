import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingComponent } from './components/books-routing/books-routing.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BooksRoutingModule } from './books.routing';

const MAT_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
];

@NgModule({
  declarations: [BooksRoutingComponent, BooksListComponent],
  imports: [
    ...MAT_MODULES,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    BooksRoutingModule
  ],
})
export class BooksModule {}
