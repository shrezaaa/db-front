import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  form = this.fb.group({
    title: '',
    stockName: '',
    stockID: '',
    expensiveBooks: false,
  });
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
  stocks: Array<any>;
  constructor(private fb: FormBuilder, private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getStocks().subscribe((res: any) => {
      this.stocks = res;
    });
    this.getData();
  }

  getData() {
    this.booksService
      .getBooks(this.form.value)
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

  checkboxChange(event) {
    if (event.checked) {
      this.form.get('title').disable();
      this.form.get('stockName').disable();
    } else {
      this.form.get('title').enable();
      this.form.get('stockName').enable();
    }
  }
}
