import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../theme-switcher.service';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private ts: ThemeSwitcherService, private flash: Flashlight, private platform: Platform) {}

  changeTheme(theme: string, toggleValue: CustomEvent) {
    console.log('toggle value', toggleValue);
    if (toggleValue.detail.checked) {
      this.ts.setTheme(theme);
    } else {
      this.ts.setTheme('day');
    }
  }

  light(state: string) {
    // if (state === 'OFF') {
    //   console.log('flash off');
    //   this.flash.switchOff();
    //   return;
    // }
    // console.log('flash on');
    // this.flash.switchOn();
    this.platform.ready().then(() => {
      this.flash.available().then(good => {
        if (good) {
          if (state === 'ON') {
            this.flash.switchOn();
          } else {
            this.flash.switchOff();
          }
        }
      });
    });
  }

}
