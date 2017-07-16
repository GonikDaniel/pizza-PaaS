import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';

// import { NAV_DROPDOWN_DIRECTIVES } from './nav-dropdown.directive';
// import { SIDEBAR_TOGGLE_DIRECTIVES } from './sidebar.directive';
// import { AsideToggleDirective } from './aside.directive';
// import { BreadcrumbsComponent } from './breadcrumb.component';
// import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    // NAV_DROPDOWN_DIRECTIVES,
    // SIDEBAR_TOGGLE_DIRECTIVES,
    // AsideToggleDirective,
    // BreadcrumbsComponent,
    // AutofocusDirective
  ],
  imports: [
    CommonModule,
    RouterModule,

    // 3rd party modules
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [
    CommonModule,

    // NAV_DROPDOWN_DIRECTIVES,
    // SIDEBAR_TOGGLE_DIRECTIVES,
    // AsideToggleDirective,
    // BreadcrumbsComponent,
    // AutofocusDirective,

    BsDropdownModule,
    TabsModule,
    AlertModule
  ]
})
export class SharedModule { }
