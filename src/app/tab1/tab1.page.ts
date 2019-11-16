import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AstronautService, AstronautRecord } from '../astronaut.service';
import { ModalController } from '@ionic/angular';
import { AstronautDetailPage } from '../astronaut-detail/astronaut-detail.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  astronauts: Observable<AstronautRecord[]>;

  constructor(
    private as: AstronautService,
    private modalController: ModalController
    ) {
    this.astronauts = this.as.allAstronauts;
  }

  async presentDetails(astronaut: AstronautRecord) {
    const modal = await this.modalController.create({
      component: AstronautDetailPage,
      componentProps: {astronaut}
    });
    // const { data } = await modal.onWillDismiss();
    // console.log(data);
    return await modal.present();
  }

}
