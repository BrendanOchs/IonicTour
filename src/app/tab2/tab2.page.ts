import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AstronautRecord, AstronautService } from '../astronaut.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  selected: Observable<AstronautRecord>;

  constructor(as: AstronautService) {
  }

}
