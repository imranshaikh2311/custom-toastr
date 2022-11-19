import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomToastrComponent } from './custom-toastr.component';



@NgModule({
  declarations: [
    CustomToastrComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomToastrComponent
  ]
})
export class CustomToastrModule { }
