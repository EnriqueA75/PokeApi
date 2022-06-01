import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    ConfirmationModalComponent
  ]
})
export class SharedModule { }
