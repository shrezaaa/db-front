import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersRoutingComponent } from './components/customers-routing/customers-routing.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersRoutingComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: CustomersListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
