import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { share, map } from 'rxjs/operators';

export interface AstronautRecord {
  name?: string;
  year?: number;
  group?: number;
  status?: string;
  birthdate?: string;
  birthPlace?: string;
  gender?: string;
  almaMater?: string;
  undergraduateMajor?: string;
  graduateMajor?: string;
  militaryRank?: string;
  militaryBranch?: string;
  spaceFlights?: number;
  spaceFlightHours?: number;
  spaceWalks?: number;
  spaceWalkHours?: number;
  missions?: string;
  deathDate?: string;
  deathMission?: string;
  photo?: string;
}

export interface AstronautStat {
  name?: string;
  spaceFlights?: number;
  spaceFlightHours?: number;
  spaceWalks?: number;
  spaceWalkHours?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AstronautService {
  allAstronauts: Observable<AstronautRecord[]>;
  newAstronaut: BehaviorSubject<AstronautRecord> = new BehaviorSubject<AstronautRecord>(null);
  astronautStats: AstronautStat[];

  constructor(http: HttpClient) {
    this.allAstronauts = combineLatest([
      http.get<AstronautRecord[]>('assets/astronauts.json'),
      this.newAstronaut
    ]).pipe(
      map(([astronauts, newAstronaut]) => {
          this.astronautStats = astronauts.map(a => {
            return {
              name: a.name.split(' ')[2],
              spaceFlights: a.spaceFlights,
              spaceFlightHours: a.spaceFlightHours,
              spaceWalks: a.spaceWalks,
              spaceWalkHours: a.spaceWalkHours
            };
          });
          console.log(this.astronautStats);
          return [...astronauts, newAstronaut];
        }
      )
    );
  }
}
