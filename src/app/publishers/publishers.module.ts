import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishersRoutingComponent } from './components/publishers-routing/publishers-routing.component';
import { PublishersListComponent } from './components/publishers-list/publishers-list.component';
import { PublishersRoutingModule } from './piblishers.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

const MAT_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTabsModule
];

@NgModule({
  declarations: [PublishersRoutingComponent, PublishersListComponent],
  imports: [
    ...MAT_MODULES,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    PublishersRoutingModule,
  ],
})
export class PublishersModule {}
