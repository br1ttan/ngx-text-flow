import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxTextFlowModule } from '@text-flow/ngx-text-flow';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxTextFlowModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
