import { Component, OnInit } from '@angular/core';
import { TableField } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BookModel } from '../shared/models/book.model';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  tableFields: TableField<any>[] = [
    {
      name: 'book_title',
      header: 'Title',
      cellEllipsisRow: 2,
    },
    {
      name: 'eddition',
      header: 'Eddition',
    },
    {
      name: 'release_date',
      header: 'Release Date',
    },
    {
      name: 'price',
      header: 'Price',
    },
  ];
  tableDataSource = new BehaviorSubject<any[]>([]);
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .pipe(
        take(1),
        map((res: any) => {
          return res.map((value) => new BookModel(value));
        })
      )
      .subscribe((res) => {
        this.tableDataSource.next(res);
      });
  }
}
