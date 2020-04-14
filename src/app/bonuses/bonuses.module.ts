import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BonusesRoutingModule } from './bonuses-routing.module';
import { BonusListComponent } from './bonus-list/bonus-list.component';
import { BonusComponent } from './bonus/bonus.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, HttpClientModule, FormsModule, BonusesRoutingModule
  ],
  declarations: [BonusComponent, BonusListComponent]
})
export class BonusesModule { }
