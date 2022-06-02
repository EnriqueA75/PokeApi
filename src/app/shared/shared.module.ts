import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ScreenMessageComponent } from './screen-message/screen-message.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ConfirmationModalComponent,
    ScreenMessageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    ConfirmationModalComponent,
    ScreenMessageComponent
  ]
})
export class SharedModule { }
