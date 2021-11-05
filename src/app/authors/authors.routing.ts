import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorsRoutingComponent } from './components/authors-routing/authors-routing.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsRoutingComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: AuthorsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
