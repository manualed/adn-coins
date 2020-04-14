import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonusComponent } from './bonus/bonus.component';
import { BonusListComponent } from './bonus-list/bonus-list.component';

export const routes: Routes = [
  { path: '',
    children : [
      { path: 'bonus', component: BonusComponent},
      { path: 'bonus/:id', component: BonusComponent },
      { path: 'bonus-list', component: BonusListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BonusesRoutingModule { }