import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule }   from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
