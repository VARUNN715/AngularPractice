import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { NgPipesComponent } from './ng-pipes/ng-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindComponent,
    FormsComponent,
    NgPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
