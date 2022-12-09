import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule,
    InputMaskModule,
    CalendarModule,
    InputTextModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    MenubarModule,
    PanelModule,

  ],
  providers: [],
})
export class AppModule { }
