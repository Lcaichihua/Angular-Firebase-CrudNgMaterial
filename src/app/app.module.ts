import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatModule } from './mat/mat.module';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
