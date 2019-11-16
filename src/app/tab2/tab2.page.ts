import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  zoom = 0;

  lat = 51.673858;
  lng = 7.815982;

  latitude: number;
  longitude: number;

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }

}
