import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,MatInputModule, MatTabsModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactfromComponent } from './contactfrom/contactfrom.component';
import { HomeComponent } from './home/home.component';
import { StoreddataComponent } from './storeddata/storeddata.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactfromComponent,
    HomeComponent,
    StoreddataComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatAutocompleteModule,
      MatInputModule,
      MatTabsModule,
      MatCheckboxModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
