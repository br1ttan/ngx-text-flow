import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditorComponent } from './components';

@NgModule({
  declarations: [EditorComponent],
  imports: [CommonModule],
  providers: [],
  exports: [EditorComponent],
})
export class NgxTextFlowModule {}
