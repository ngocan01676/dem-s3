import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { MobxAngularModule } from 'mobx-angular';
import { AComComponent } from './acom/acom.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    MobxAngularModule,
  ],
  declarations: [AppComponent, AComComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
