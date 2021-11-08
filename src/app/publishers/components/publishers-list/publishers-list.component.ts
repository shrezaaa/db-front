import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TableField } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Toaster } from 'src/app/core/toast-notification';
import { ActionItem } from 'src/app/shared/components/action-list/action-list.component';
import { PublisherModel } from '../../shared/models/publisher.model';
import { PublishersService } from '../../shared/services/publishers.service';

@Component({
  selector: 'app-publishers-list',
  templateUrl: './publishers-list.component.html',
  styleUrls: ['./publishers-list.component.scss'],
})
export class PublishersListComponent implements OnInit {
  tabIndex = 0;
  model = [];
  form = new FormGroup({});
  formFields: FormlyFieldConfig[] = [];

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
  selectedRows: Array<any> = [];
  actionItems: ActionItem[] = [
    { id: 1, text: 'Add', matIcon: 'add_box', tooltip: 'Add' },
    { id: 2, text: 'Modify', matIcon: 'edit', tooltip: 'Modify' },
    { id: 3, text: 'Delete', matIcon: 'delete', tooltip: 'Delete' },
  ];
  constructor(
    private publishersService: PublishersService,
    private toaster: Toaster
  ) {}

  ngOnInit(): void {
    this.getData();
    this.initForm();
  }

  getData() {
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

  onSubmitForm() {
    this.publishersService.addPublisher(this.model).subscribe((res) => {
      if (res.success) {
        this.getData();
        this.onCancel();
      }
    });
  }

  initEditData(data) {
    this.tabIndex = 1;
    this.model = { ...data };
    this.form.patchValue(data.editData);
  }

  deleteItem(itemID) {
    this.publishersService.deletePublisher(itemID).subscribe((res) => {
      if (res.success) {
        this.getData();
      }
    });
  }

  onCancel() {
    this.tabIndex = 0;
    this.model = [];
    this.form.reset();
    this.form.markAsUntouched();
  }

  onRowSelect(event) {
    if (
      event.event == 'MasterSelectionChange' ||
      event.event == 'RowSelectionChange'
    ) {
      this.selectedRows = event.sender?.selected;
    }
  }

  onActionMenu(event: ActionItem) {
    switch (event.text) {
      case 'Add':
        this.tabIndex = 1;
        break;
      case 'Delete':
        if (this.selectedRows.length > 0) {
          // this.deleteItem(this.selectedRow[0].TermConditionID);
        } else {
          this.toaster.open({
            caption: 'Event Message',
            text: 'Please select an item',
          });
        }
        break;
      case 'Modify':
        if (this.selectedRows.length > 0) {
          // this.initEditData(this.selectedRow[0]);
        } else {
          this.toaster.open({
            caption: 'Event Message',
            text: 'Please select an item',
          });
        }
        break;
    }
  }

  initForm() {
    this.formFields = [
      {
        fieldGroupClassName: 'flex-container',
        fieldGroup: [
          {
            className: 'flex-100 padding-x-5',
            key: 'TermConditionName',
            type: 'input',
            templateOptions: {
              appearance: 'outline',
              label: 'Term Condition Name',
            },
          },
        ],
      },
    ];
  }
}
