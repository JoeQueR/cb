import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KataAngularComponent} from './kata-angular/kata-angular.component';
import {MatCardModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    KataAngularComponent
  ],
  exports: [
    KataAngularComponent
  ]
})
export class KatasModule {
}
