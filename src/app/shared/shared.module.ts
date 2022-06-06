import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ScreenMessageComponent } from './screen-message/screen-message.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ConfirmationModalComponent,
    ScreenMessageComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    ConfirmationModalComponent,
    ScreenMessageComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
