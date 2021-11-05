import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingComponent } from './components/customers-routing/customers-routing.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersRoutingModule } from './books.routing';

const MAT_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
];
@NgModule({
  declarations: [CustomersRoutingComponent, CustomersListComponent],
  imports: [
    CommonModule,
    ...MAT_MODULES,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CustomersRoutingModule
  ],
})
export class CustomersModule {}
