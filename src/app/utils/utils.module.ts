import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './components/toast/toast.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, NgbModule],
  exports: [ToastComponent],
})
export class UtilsModule {}
