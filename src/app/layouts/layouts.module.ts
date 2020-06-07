import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const CONTAINER = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
];

@NgModule({
  declarations: [
    ...CONTAINER
  ],
  imports: [
    CommonModule
  ],
  exports: [...CONTAINER]
})
export class LayoutsModule { }
