import { Component, OnInit } from '@angular/core';
import { TableField } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BookModel } from '../../../books/components/shared/models/book.model';
import { BooksService } from '../../../books/components/shared/services/books.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent implements OnInit {
  tableFields: TableField<any>[] = [
    {
      name: 'book_title',
      header: 'book title',
      cellEllipsisRow: 2,
    },
    {
      name: 'eddition',
      header: 'eddition',
    },
    {
      name: 'price',
      header: 'price',
    },
    {
      name: 'release_date',
      header: 'release_date',
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
