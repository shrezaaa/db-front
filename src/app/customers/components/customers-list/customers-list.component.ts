import { Component, OnInit } from '@angular/core';
import { TableField } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { customerModel } from '../../shared/models/customer.model';
import { CustomersService } from '../../shared/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  tableFields: TableField<any>[] = [
    {
      name: 'fullName',
      header: 'Name',
      cellEllipsisRow: 2,
    },
    {
      name: 'email',
      header: 'Email',
    },
    {
      name: 'province_state',
      header: 'State',
    },
    {
      name: 'city_town',
      header: 'City',
    },
  ];
  tableDataSource = new BehaviorSubject<any[]>([]);
  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customersService
      .getCustomers()
      .pipe(
        take(1),
        map((res: any) => {
          return res.map((value) => new customerModel(value));
        })
      )
      .subscribe((res) => {
        this.tableDataSource.next(res);
      });
  }
}
