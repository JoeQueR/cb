import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeComponent} from './about-me.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    AboutMeComponent
  ],
  exports: [
    AboutMeComponent
  ]
})
export class AboutMeModule {
}
