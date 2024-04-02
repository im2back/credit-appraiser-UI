import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidMessagesComponent } from './valid-messages/valid-messages.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ValidMessagesComponent
  ],
  exports: [ValidMessagesComponent]

})
export class ShareModule { }
