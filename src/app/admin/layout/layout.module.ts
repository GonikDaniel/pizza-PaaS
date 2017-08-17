import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { SharedModule } from '../../shared/shared.module';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    TabsModule,

    SharedModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // layout
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AsideComponent
  ]
})
export class LayoutModule { }
