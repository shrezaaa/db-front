import { Component, OnInit } from '@angular/core';
import { TableField } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { CustomersService } from '../../shared/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
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
  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    // this.customersService
    //   .getBooks()
    //   .pipe(
    //     take(1),
    //     map((res: any) => {
    //       return res.map((value) => new BookModel(value));
    //     })
    //   )
    //   .subscribe((res) => {
    //     this.tableDataSource.next(res);
    //   });
  }
}
