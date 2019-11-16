import { Component, OnInit, Input } from '@angular/core';
import { AstronautRecord, AstronautStat, AstronautService } from '../astronaut.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-astronaut-detail',
  templateUrl: './astronaut-detail.page.html',
  styleUrls: ['./astronaut-detail.page.scss'],
})
export class AstronautDetailPage implements OnInit {

  astronaut: AstronautRecord;
  hourScale = 10 / 1000;
  astronauts: AstronautStat[];
  convertedName: string;

  constructor(private modalCtrl: ModalController, private np: NavParams, private as: AstronautService) {
    this.astronauts = this.as.astronautStats;
  }

  ngOnInit() {
    this.astronaut = this.np.get('astronaut');
    this.convertedName = this.astronaut.name.split(' ')[2];
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
