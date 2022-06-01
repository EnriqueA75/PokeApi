import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ConfirmatinModalComponent } from './confirmatin-modal/confirmatin-modal.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ConfirmatinModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SharedModule { }
