import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ScreenMessageComponent } from './screen-message/screen-message.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    ConfirmationModalComponent,
    ScreenMessageComponent,
    SpinnerComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    ConfirmationModalComponent,
    ScreenMessageComponent,
    SpinnerComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
