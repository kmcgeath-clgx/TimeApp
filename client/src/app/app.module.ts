import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonOverviewExample} from './button-overview-example';

@NgModule({
  declarations: [ButtonOverviewExample],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ButtonOverviewExample],
})
export class AppModule {}