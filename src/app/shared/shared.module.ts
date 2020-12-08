import { AsideComponent } from './aside/aside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideComponent
  ]
})
export class SharedModule { }
