import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishersListComponent } from './components/publishers-list/publishers-list.component';
import { PublishersRoutingComponent } from './components/publishers-routing/publishers-routing.component';

const routes: Routes = [
  {
    path: '',
    component: PublishersRoutingComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: PublishersListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishersRoutingModule {}
