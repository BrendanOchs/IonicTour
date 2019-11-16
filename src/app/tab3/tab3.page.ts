import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../theme-switcher.service';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private ts: ThemeSwitcherService, private flash: Flashlight) {}

  changeTheme(theme: string, toggleValue: CustomEvent) {
    console.log('toggle value', toggleValue);
    if (toggleValue.detail.checked) {
      this.ts.setTheme(theme);
    } else {
      this.ts.setTheme('day');
    }
  }

  light() {
    if (this.flash.isSwitchedOn()) {
      this.flash.switchOff();
      return;
    }
    this.flash.switchOn();
  }

}
