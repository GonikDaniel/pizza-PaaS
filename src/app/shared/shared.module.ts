import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';

import {
  CheckboxModule,
  MultiSelectModule,
  SelectButtonModule,
  DropdownModule,
  SplitButtonModule,
  AutoCompleteModule,
  GrowlModule,
  TooltipModule,
} from 'primeng/primeng';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UnderDevelopmentPanelComponent } from './under-development-panel/under-development-panel.component';
import { NAV_DROPDOWN_DIRECTIVES } from './nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './sidebar.directive';
import { AsideToggleDirective } from './aside.directive';
import { BreadcrumbsComponent } from './breadcrumb.component';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [

    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbsComponent,
    AutofocusDirective,

    UnderDevelopmentPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    // 3rd party modules
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),

    CheckboxModule,
    MultiSelectModule,
    SelectButtonModule,
    DropdownModule,
    SplitButtonModule,
    AutoCompleteModule,
    GrowlModule,
    TooltipModule,

    NgxDatatableModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbsComponent,
    AutofocusDirective,

    BsDropdownModule,
    TabsModule,
    AlertModule,

    CheckboxModule,
    MultiSelectModule,
    SelectButtonModule,
    DropdownModule,
    SplitButtonModule,
    AutoCompleteModule,
    GrowlModule,
    TooltipModule,

    NgxDatatableModule,

    UnderDevelopmentPanelComponent
  ]
})
export class SharedModule { }
