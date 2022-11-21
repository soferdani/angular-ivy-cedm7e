import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoBoxModule } from './info-box/info-box.module';

@NgModule({
  imports: [BrowserModule, FormsModule, InfoBoxModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
