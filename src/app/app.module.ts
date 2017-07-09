import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { SharedModule }     from './shared/shared.module';
import { StaticModule }     from './static/static.module';
import { CoreModule }       from './core/core.module';
import { AuthModule }       from './auth/auth.module';
import { AdminModule }      from './admin/admin.module';
import { CatalogueModule }  from './catalogue/catalogue.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    StaticModule,
    CoreModule,
    AuthModule,
    AdminModule,
    CatalogueModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
