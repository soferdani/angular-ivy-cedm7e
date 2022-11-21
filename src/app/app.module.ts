import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,InfoBoxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
