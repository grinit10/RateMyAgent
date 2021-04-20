import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyComponent } from './components/agency/agency.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { AgencyRoutingModule } from './agency.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AgencyComponent,
    AgenciesComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class AgencyModule { }
