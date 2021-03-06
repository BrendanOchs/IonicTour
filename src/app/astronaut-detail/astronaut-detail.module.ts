import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AstronautDetailPage } from './astronaut-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AstronautDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AstronautDetailPage]
})
export class AstronautDetailPageModule {}
