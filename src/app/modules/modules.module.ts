import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRouterRoutes } from './manager-router.routing';
import { LayoutsModule } from '../layouts/layouts.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    ManagerRouterRoutes
  ]
})
export class ModulesModule { }
