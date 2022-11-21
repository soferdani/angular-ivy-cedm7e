import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoBoxModule } from './info-box/info-box.module';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InfoBoxModule,
    StoreModule.forRoot({ count: usersReducer }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
