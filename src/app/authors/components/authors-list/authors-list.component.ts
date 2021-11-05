import { Component, OnInit } from '@angular/core';
import { TableField } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthorsModel } from '../../shared/models/author.model';
import { AuthorsService } from '../../shared/services/authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent implements OnInit {
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
  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.authorsService
      .getAuthors()
      .pipe(
        take(1),
        map((res: any) => {
          return res.map((value) => new AuthorsModel(value));
        })
      )
      .subscribe((res) => {
        this.tableDataSource.next(res);
      });
  }
}
