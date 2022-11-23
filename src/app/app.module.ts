import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
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
    MenubarModule,

  ],
  providers: [],
})
export class AppModule { }
