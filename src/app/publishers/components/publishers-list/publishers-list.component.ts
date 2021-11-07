import { Component, OnInit } from '@angular/core';
import { TableField } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { PublisherModel } from '../../shared/models/publisher.model';
import { PublishersService } from '../../shared/services/publishers.service';

@Component({
  selector: 'app-publishers-list',
  templateUrl: './publishers-list.component.html',
  styleUrls: ['./publishers-list.component.scss'],
})
export class PublishersListComponent implements OnInit {
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
  constructor(private publishersService: PublishersService) {}

  ngOnInit(): void {
    this.publishersService
      .getPublishers()
      .pipe(
        take(1),
        map((res: any) => {
          return res.map((value) => new PublisherModel(value));
        })
      )
      .subscribe((res) => {
        this.tableDataSource.next(res);
      });
  }
}
