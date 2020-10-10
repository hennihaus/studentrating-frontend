import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfsRoutingModule } from './profs-routing.module';
import { ProfDetailsComponent } from './prof-details/prof-details.component';
import { ProfListComponent } from './prof-list/prof-list.component';
import { ProfListItemComponent } from './prof-list-item/prof-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { SubjectsModule } from '../subjects/subjects.module';


@NgModule({
  declarations: [
    ProfDetailsComponent,
    ProfListComponent,
    ProfListItemComponent,
  ],
  imports: [
    CommonModule,
    ProfsRoutingModule,
    SharedModule,
    SubjectsModule
  ]
})
export class ProfsModule { }
