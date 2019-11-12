import { Component, OnInit } from '@angular/core';

import { TravelsService } from '../travels.service'

@Component({
  selector: 'app-travels-display',
  templateUrl: './travels-display.component.html',
  styleUrls: ['./travels-display.component.styl']
})
export class TravelsDisplayComponent implements OnInit {
  travelsAry = []

  constructor(private travelsService: TravelsService ) { }

  ngOnInit() {
    this.travelsService.getTravels().subscribe(
      travel_objs => this.travelsAry = travel_objs.map(
        tro => { return { $key: tro.key, ...tro.payload.val() }}
      )
    )
  }

}
