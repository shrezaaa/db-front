import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthorsRoutingComponent } from './components/authors-routing/authors-routing.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorsRoutingModule } from './authors.routing';

const MAT_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
];

@NgModule({
  declarations: [AuthorsRoutingComponent, AuthorsListComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    ...MAT_MODULES,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    AuthorsRoutingModule,
  ],
})
export class AuthorsModule {}
