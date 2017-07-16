import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './../public/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { AsideToggleDirective } from '../shared/aside.directive';
import { BreadcrumbsComponent } from '../shared/breadcrumb.component';
import { NAV_DROPDOWN_DIRECTIVES } from '../shared/nav-dropdown.directive';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,

    BsDropdownModule,
    TabsModule,

    LayoutModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,

    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbsComponent,
    NAV_DROPDOWN_DIRECTIVES
  ]
})
export class AdminModule { }
