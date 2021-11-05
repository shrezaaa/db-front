import { Component, OnInit } from '@angular/core';
import { TableField } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
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
      header: 'book title',
      cellEllipsisRow:2
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
    this.booksService.getBooks().subscribe((res: any) => {
      console.log(res);

      this.tableDataSource.next(res);
    });
  }
}
