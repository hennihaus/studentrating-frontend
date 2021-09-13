import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfListComponent } from './prof-list/prof-list.component';
import { ProfDetailsComponent } from './prof-details/prof-details.component';


const routes: Routes = [
  {
    path: '',
    component: ProfListComponent
  },
  {
    path: ':id/:thumbnailUrl',
    component: ProfDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfsRoutingModule { }
